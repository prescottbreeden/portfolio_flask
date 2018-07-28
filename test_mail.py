from flask_mail import Message
from app import app, mail


mail.connect()

msg = Message("Hello",
              sender='cnorris2882@gmail.com',
              recipients=["prescott.breeden@gmail.com"])
msg.body = 'test body'
msg.html = '<b>HTML</b> body'

with app.app_context():
    mail.send(msg)
