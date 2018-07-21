# portfolio_flask

## To Install on linux/mac
- navigate to directory you wish to download the project
- run 'git clone https://github.com/prescottbreeden/portfolio_flask'
- run 'cd portfolio_flask'
- run 'python3 -m venv virtualenv' to create environment
- run 'source virtualenv/bin/activate' to activate environment
- run 'pip install -r requirements.txt'
- run 'npm install' (optional)
- run 'export FLASK_APP=server.py'
- run 'export FLASK_ENV=development'
- run 'export FLASK_DEBUG=1'
- run 'flask run'

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
