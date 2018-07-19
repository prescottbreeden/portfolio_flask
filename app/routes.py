from flask import render_template
from app import app
from app.models import Tech
import json


@app.route('/')
def home():
    tech = Tech.query.all()
    print(tech)
    for t in tech:
        print(t)
    return render_template('index.html')


@app.route('/tech/<id>')
def tech(id):
    tech = Tech.query.all()
    for t in tech:
        if t.name == id:
            return json.dumps({'name': t.name, 'blurb': t.blurb})
    return 'query failed'
