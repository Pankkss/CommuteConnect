from flask import Flask, render_template, request, redirect, url_for
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

app=Flask(__name__)

@app.route("/")
def hello():
    return ('hello world')
@app.route("/home")
def home():
    return
@app.route("/profile")
def profile():
    return
@app.route("/results")
def results():
    return

if __name__=='__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
