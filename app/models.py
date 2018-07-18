from sqlalchemy import Column, Integer, String
from portfolio.database import Base


class Tech(Base):
    __tablename__ = 'tech'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    blurb = Column(String(255), unique=True)

    def __init__(self, name=None, blurb=None):
        self.name = name
        self.blurb = blurb

    def __repr__(self):
        return '<Tech %r>' % (self.name)
