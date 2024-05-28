from flask import Flask, render_template, request, redirect, flash, url_for, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import login_user, login_required, logout_user, LoginManager, UserMixin, current_user
from flask_migrate import Migrate
import sqlite3
import os
import json

venv_dir = os.path.dirname(os.path.abspath(__file__))
db_file = os.path.join(venv_dir, 'instance', 'users.db')

app = Flask(__name__)
app.secret_key = 'sdgdwffewofeiuwoehufiowfhue'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_file
db = SQLAlchemy(app)
migrate = Migrate(app, db)
manager = LoginManager(app)
is_authentificated = False


def xor_encrypt(text, key):
    encrypted = ''.join(chr(ord(c) ^ ord(k)) for c, k in zip(text, key))
    return encrypted


def xor_decrypt(text, key):
    decrypted = ''.join(chr(ord(c) ^ ord(k)) for c, k in zip(text, key))
    return decrypted


class Users(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(16), nullable=False)
    password = db.Column(db.String, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    birthDate = db.Column(db.Date)
    cardNumber = db.Column(db.String(20))
    cardExpirationDate = db.Column(db.String(20))
    cardCVV = db.Column(db.String(20))
    
    def __repr__(self):
        return '<Users %r>' % self.id


class Dishes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String(255))
    ingredients = db.Column(db.String)
    weight = db.Column(db.Integer)
    price = db.Column(db.Integer)
    
    def __repr__(self):
        return '<Dishes %r>' % self.id


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    items = db.Column(db.Text, nullable=False)
    total_price = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String, nullable=False)
    address = db.Column(db.String)
    deliveryTime = db.Column(db.String)

    def __repr__(self):
        return '<Order %r>' % self.id

    @property
    def items_list(self):
        return json.loads(self.items)

    @items_list.setter
    def items_list(self, value):
        self.items = json.dumps(value, ensure_ascii=False)


def get_db():
    venv_dir = os.path.dirname(os.path.abspath(__file__))
    db_file = os.path.join(venv_dir, 'instance', 'users.db')
    db = sqlite3.connect(db_file)
    db.row_factory = sqlite3.Row
    return db


@manager.user_loader
def load_user(user_id):
    return Users.query.get(user_id)


def login(page):
    if request.method == "POST":
        global is_authentificated
        phone = request.form.get('phone')
        password = request.form.get('password')

        if phone and password:
            try:
                user = Users.query.filter_by(phone=phone).first()
            except:
                flash('Неправильный номер телефона', 'wrong_1')

            if user and check_password_hash(user.password, password):
                login_user(user, remember=False)

                is_authentificated = True
                session['id'] = user.id
                session['name'] = user.username
                session['phone'] = user.phone
                return 1
            else:
                flash('Неправильный пароль', 'wrong_1')
        else:
            pass


def register(page):
    username = request.form.get('username_r')
    phone = request.form.get('phone_r')
    password = request.form.get('password_r')
    repeat_password = request.form.get('repeat_password_r')

    if request.method == 'POST':
        if not (username or phone or password or repeat_password):
            pass
        elif password != repeat_password:
            flash('Пароли не совпадают!', 'wrong_1')
        else:
            try:
                if phone == Users.query.filter_by(phone=phone).first().phone:
                    flash('Номер уже зарегестрирован', 'wrong_1')
                return render_template(page)
            except:
                hash_pwd = generate_password_hash(password)
                new_user = Users(username=username, phone=phone, password=hash_pwd)
                if password == repeat_password:
                    try:
                        db.session.add(new_user)
                        db.session.commit()
                        return 1
                    except:
                        return "При регистрации произошла ошибка"


@app.route("/", methods=['GET', 'POST'])
def index():
    global is_authentificated
    if is_authentificated is False and 'id' in session:
        return redirect('/logout')

    if login('index.html') == 1:
        return redirect(url_for('user', id=session['id']))
    if register('index.html') == 1:
        return redirect('/register_complete')
    else:
        return render_template('index.html')


@app.route("/contacts", methods=['GET', 'POST'])
def contacts():
    if login('contacts.html') == 1:
        return redirect(url_for('user', id=session['id']))
    if register('contacts.html') == 1:
        return redirect('/register_complete')
    else:
        return render_template('contacts.html')


@app.route("/placing/<id>", methods=['GET', 'POST'])
@login_required
def placing(id):
    if 'id' in session and session['id'] != int(id):
        return redirect('/')
    key1 = "73i54sfg243v5643s3z67"

    if 'id' in session and session['id'] != int(id):
        return redirect('/')

    user = Users.query.filter_by(id=id).first_or_404()
    if user.cardNumber:
        masked_card_number = "**** **** **** " + xor_decrypt(user.cardNumber, key1)[-4:]
    else:
        masked_card_number = "0000 0000 0000 0000"

    if user.cardExpirationDate:
        masked_card_date = "**/**"
    else:
        masked_card_date = "мм/гг"

    if user.cardCVV:
        masked_card_cvc = "***"
    else:
        masked_card_cvc = "CVC"

    address = request.form.get('address')
    delivery_time = request.form.get('time_form_pl')
    if 'delivery_time' not in session:
        session['delivery_time'] = 'Как можно скорее'
    if request.method == 'POST':
        session['address'] = address

    return render_template('placing.html', total_price=session.get('total_price', 0), user=user,
                           masked_card_number=masked_card_number, masked_card_date=masked_card_date,
                           masked_card_cvc=masked_card_cvc)


@app.route("/actions", methods=['GET', 'POST'])
def actions():
    if login('actions.html') == 1:
        return redirect(url_for('user', id=session['id']))
    if register('actions.html') == 1:
        return redirect('/register_complete')
    else:
        return render_template('actions.html')


@app.route('/add_to_order/<dish_id>', methods=['GET', 'POST'])
@login_required
def add_to_order(dish_id):
    db = get_db()
    cursor = db.cursor()

    cursor.execute("SELECT * FROM dishes WHERE id = ?", (dish_id,))
    dish = cursor.fetchone()

    if dish:
        if 'order' not in session:
            session['order'] = []

        if len(session['order']) != 0:
            for item in session['order']:
                if dish['id'] == item['id']:
                    if item['quantity'] < 9:
                        item['quantity'] = item.get('quantity', 0) + 1
                    session['total_price'] = sum((item['price'] * item['quantity']) for item in session['order'])
                    session['total_quantity'] = sum(item['quantity'] for item in session['order'])

                    db.close()

                    return redirect(request.referrer)

        session['order'].append({
            'id': dish['id'],
            'name': dish['name'],
            'price': dish['price'],
            'image': dish['image'],
            'ingredients': dish['ingredients'],
            'quantity': 1
        })

        session['total_price'] = sum((item['price'] * item['quantity']) for item in session['order'])
        session['total_quantity'] = sum(item['quantity'] for item in session['order'])

        db.close()

        return redirect(request.referrer)
    else:
        return "Ошибка: Блюдо не найдено"


current_order = None
total_price = None


@app.route('/clear_order/<id>')
def clear_order(id):
    if 'id' in session and session['id'] != int(id):
        return redirect('/')
    global current_order
    global total_price
    current_order = session['order']
    total_price = session['total_price']
    session.pop('order', None)
    session.pop('total_price', None)
    session.pop('total_quantity', None)
    return redirect(url_for('update_order_status', id=session['id']))


@app.route('/order_saving/<id>')
@login_required
def order_saving(id):
    if 'id' in session and session['id'] != int(id):
        return redirect('/')
    order = Order(user_id=id, items_list=session['order'], total_price=session['total_price'], status='Доставлен', address=session['address'],
                  deliveryTime=session['delivery_time'])
    db.session.add(order)
    db.session.commit()
    return redirect(url_for('clear_order', id=id))


@app.route('/remove_from_order/<dish_id>', methods=['GET', 'POST'])
def remove_from_order(dish_id):
    if 'order' not in session:
        return "Ошибка: Заказ пуст"

    order = session['order']
    for item in order:
        if item['id'] == int(dish_id):
            order.remove(item)
            session['total_price'] -= item['price'] * item['quantity']
            session['total_quantity'] -= item['quantity']
            break

    if len(order) == 0:
        session.pop('order', None)
        session.pop('total_price', None)
        session.pop('total_quantity', None)

    return redirect(request.referrer)


@app.route('/decrease_quantity/<dish_id>')
def decrease_quantity(dish_id):
    order = session['order']
    for item in order:
        if item['id'] == int(dish_id):
            if item['quantity'] > 1:
                item['quantity'] -= 1
                session['total_price'] -= item['price']
                session['total_quantity'] -= 1
                break

    return redirect(request.referrer)


@app.route('/cart/<id>')
@login_required
def cart(id):
    if 'id' in session and session['id'] != int(id):
        return redirect('/')
    return render_template('cart.html')


@app.route('/order_update/<id>')
@login_required
def update_order_status(id):
    global current_order
    return render_template('status.html', current_order=current_order, total_price=total_price)


@app.route('/register_complete', methods=['GET'])
def register_complete():
    return render_template('register_complete.html', title="Успешная регистрация")


@app.route('/cabinet/<id>', methods=['POST', 'GET'])
@login_required
def user(id):
    key1 = "73i54sfg243v5643s3z67"
    key2 = "7h3nsyuiy5645"
    key3 = "4lfdsh7grs435354"

    if 'id' in session and session['id'] != int(id):
        return redirect('/')

    user = Users.query.filter_by(id=id).first_or_404()
    if user.cardNumber:
        masked_card_number = "**** **** **** " + xor_decrypt(user.cardNumber, key1)[-4:]
    else:
        masked_card_number = "0000 0000 0000 0000"

    if user.cardExpirationDate:
        masked_card_date = "**/**"
    else:
        masked_card_date = "мм/гг"

    if user.cardCVV:
        masked_card_cvc = "***"
    else:
        masked_card_cvc = "CVC"

    if request.method == "POST":
        if 'name_form_lk' in request.form:
            user.username = request.form.get('name_form_lk')
        if 'date_form_lk' in request.form:
            Year = int(request.form.get('date_form_lk')[:4])
            if request.form.get('date_form_lk')[5] != 0:
                Month = int(request.form.get('date_form_lk')[5:7])
            else:
                Month = int(request.form.get('date_form_lk')[6])
            if request.form.get('date_form_lk')[8] != 0:
                Day = int(request.form.get('date_form_lk')[8:10])
            else:
                Day = int(request.form.get('date_form_lk')[9])
            user.birthDate = datetime(Year, Month, Day)
        if ('card_form_lk' and 'card_cvc_form_lk' and 'card_date_form_lk') in request.form:
            card_number = request.form.get('card_form_lk')
            number_encrypted = xor_encrypt(card_number, key1)
            user.cardNumber = number_encrypted

            card_cvc = request.form.get('card_cvc_form_lk')
            cvc_encrypted = xor_encrypt(card_cvc, key3)
            user.cardCVV = cvc_encrypted

            card_date = request.form.get('card_date_form_lk')
            date_encrypted = xor_encrypt(card_date, key2)
            user.cardExpirationDate = date_encrypted
        if ('password_change_lk' and 'password_change_lk_1' and 'password_change_lk_2') in request.form:
            old_password = request.form.get('password_change_lk')
            new_password = request.form.get('password_change_lk_1')
            repeat_new_password = request.form.get('password_change_lk_2')
            if new_password != repeat_new_password:
                flash("Пароли не совпадают!")
            elif check_password_hash(user.password, old_password):
                hash_pwd = generate_password_hash(new_password)
                if new_password == repeat_new_password:
                    try:
                        user.password = hash_pwd
                    except:
                        return "При смене пароля произошла ошибка"
            else:
                flash("Неправильный пароль")

        db.session.commit()
        if user.cardNumber:
            masked_card_number = "**** **** **** " + xor_decrypt(user.cardNumber, key1)[-4:]
        if user.cardExpirationDate:
            masked_card_date = "**/**"
        if user.cardCVV:
            masked_card_cvc = "***"

        return render_template('cabinet.html', user=user, masked_card_number=masked_card_number,
                               masked_card_date=masked_card_date, masked_card_cvc=masked_card_cvc)
    return render_template('cabinet.html', user=user, masked_card_number=masked_card_number,
                           masked_card_date=masked_card_date, masked_card_cvc=masked_card_cvc)


@app.route('/logout')
@login_required
def logout():
    global is_authentificated
    session.clear()
    logout_user()
    flash("Вы вышли из аккаунта", "success")
    is_authentificated = False
    return redirect("/")


@app.route('/cabinet/<id>/history', methods=['POST', 'GET'])
@login_required
def get_orders(id):
    if 'id' in session and session['id'] != int(id):
        return redirect('/')

    orders = Order.query.filter_by(user_id=id)
    orders_list = []
    order_list = []
    for order in orders:
        items_list = json.loads(order.items)

        for item in items_list:
            order_list.append({
                "name": item["name"],
                "quantity": item["quantity"],
                "price": item["price"],
            })

        orders_list.append({
            "order": order_list,
            "id": order.id,
            "total_price": order.total_price,
            "time": order.created_at,
            "status": order.status
        })
        order_list = []

    return render_template("history.html", orders_list=orders_list)


@app.route('/cabinet/<id>/history/<order_id>')
@login_required
def order_details(id, order_id):
    if 'id' in session and session['id'] != int(id):
        return redirect('/')
    order_list = []
    order = Order.query.filter_by(id=order_id).first()
    items_list = json.loads(order.items)
    for item in items_list:
        order_list.append({
            "name": item["name"],
            "quantity": item["quantity"],
            "price": item["price"],
            "ingredients": item["ingredients"]
        })

    return render_template("details.html", order_list=order_list, order=order)


@app.context_processor
def inject_user_status():
    return dict(is_authentificated_js=is_authentificated)


if __name__ == '__main__':
    app.run(debug=True)
    
