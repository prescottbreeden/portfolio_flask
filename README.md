# portfolio_flask

## To Install on linux/mac
1) clone repository and then run 'cd portfolio_flask'
2) run 'python3 -m venv virtualenv' to create environment
3) run 'source virtualenv/bin/activate' to activate environment
4) run 'pip install -r requirements.txt'
5) run 'npm install' (optional)
6) run 'export FLASK_APP=server.py'
7) run 'export FLASK_ENV=development'
8) run 'export FLASK_DEBUG=1'
9) run 'flask run'

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
