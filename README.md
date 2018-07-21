# portfolio_flask

## To Install on linux/mac

git clone https://github.com/prescottbreeden/portfolio_flask.git
cd portfolio_flask
python3 -m venv virtualenv
source virtualenv/bin/activate
pip install -r requirements.txt
npm install
export FLASK_APP=server.py
export FLASK_ENV=development
export FLASK_DEBUG=1
flask run

If you do not get an error, the website will be running at 'localhost:5000' in your browser

### 'flask not found' error
If you get this error, check that your virtualenv is active  
When active, your cursor in the terminal will look something like: >(virtualenv) $

if virtualenv is active and you are getting this error, it is because installing pip modules from requirements.txt can be buggy and you will have to install dependencies individually.  Run these lines with your virtual environment active:
- pip install flask
- pip install flask-migrate
- pip install flask-sqlalchemy
- pip install sqlalchemy

to double check that they are installed, you can run 'pip list' to see all installed packages
