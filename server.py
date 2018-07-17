from flask import Flask
from flask import render_template
app = Flask(__name__, static_url_path='/static')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')


@app.route('/tech')
def tech():
    return render_template('tech.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')
