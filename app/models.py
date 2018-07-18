from app import db


class Tech(db.Model):
    __tablename__ = 'tech'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    blurb = db.Column(db.String(255), unique=True)

    def __init__(self, name=None, blurb=None):
        self.name = name
        self.blurb = blurb

    def __repr__(self):
        return '<Tech {}>'.format(self.name)
