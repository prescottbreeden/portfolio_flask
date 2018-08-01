import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    # ...
    SQLALCHEMY_DATABASE_URI = os.environ.get('DABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # email server
    MAIL_SERVER = 'email-smtp.us-west-2.amazonaws.com'
    MAIL_PORT = 465
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True
    MAIL_USERNAME = 'AKIAIV35GBLZAHPEQICQ'
    MAIL_PASSWORD = 'AnwYzMGpqidRIYsWHUI82IB9pjWUULaAogowWTMIFIko'
    # administrator list
    ADMINS = ['cnorris2882@gmail.com']
