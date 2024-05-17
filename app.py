from flask import Flask, render_template

app = Flask(__name__)

@app.route('/cart')
def cart():
    return render_template('cart.html')


if __name__ == '__main__':
    app.run(debug=False)