from flask import Flask, render_template, request, redirect
from users import User


app = Flask(__name__)
# app.secret_key = 'connect database'

@app.route("/")
def index():
    users = User.get_all_users()
    print(users)
    return render_template("index.html", users = users)

@app.route('/users/create', methods = ['POST'])
def create_users():
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email']
    }

    User.create_users(request.form)

    return redirect('/')

@app.route('/new')    
def new():
    return render_template('read(all).html')


            
if __name__ == "__main__":
    app.run(debug=True)