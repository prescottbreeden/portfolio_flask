from flask import render_template
from flask import request
from app import app
from app.models import Tech
import json
from flask_mail import Message
from app import mail
import re


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/tech/<id>')
def tech(id):
    tech = Tech.query.all()
    for t in tech:
        if t.name == id:
            return json.dumps({'name': t.name, 'blurb': t.blurb})
    return 'query failed'


@app.route('/process', methods=['POST'])
def contact():

    errors = []
    if len(request.form['name']) < 1:
        error = 'Name cannot be blank'
        errors.append(error)
    if len(request.form['email']) < 1:
        error = 'Email cannot be blank'
        errors.append(error)
    if not re.match(r"[^@]+@[^@]+\.[^@]+", request.form['email']):
        error = 'Email must be valid'
        errors.append(error)
    if len(request.form['message']) < 1:
        error = 'Message cannot be blank'
        errors.append(error)

    if(errors):
        print(errors)
        return render_template('contact.html', errs=errors)
    else:
        # display success message
        # mail.connect()
        # msg = Message("Contact From Website",
        #               sender='cnorris2882@gmail.com',
        #               recipients=["prescott.breeden@gmail.com"])
        # msg.body = request.form['message']
        # msg.html = (

        #     "<h1>Contact from Website</h1>"
        #     f"<h3>Name: {request.form['name']}</h3>"
        #     f"<h3>Email: {request.form['email']}</h3>"
        #     f"<p>Message: {request.form['message']}</p>"

        # )

        # with app.app_context():
        #     mail.send(msg)

        msg = request.form['message']

        return render_template('success.html', info=request.form, msg=msg)
