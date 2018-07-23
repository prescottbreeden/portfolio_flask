#!/usr/bin/env bash
source virtualenv/bin/activate
export FLASK_APP=server.py
export FLASK_ENV=development
export FLASK_DEBUG=1
flask run
