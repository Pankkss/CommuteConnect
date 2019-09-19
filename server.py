from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
import os, datetime

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'CommuteConnect.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app)

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True, unique = True)
  userID = db.Column(db.Integer, unique = True)
  bio = db.Column(db.Text)
  email = db.Column(db.String(120), unique = True)
  company = db.Column(db.String(120))
  homeCity = db.Column(db.String(120))
  token = db.Column(db.Integer)
  name = db.Column(db.String(200))


  def __init__(self, userID, bio, email, company, homeCity, token, name):
    self.id = None
    self.userID= userID
    self.bio = bio  
    self.email = email
    self.company = company
    self.homeCity = homeCity
    self.token = token
    self.name = name


class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('userID', 'bio', 'email', 'company', 'homeCity','name')


user_schema = UserSchema()
users_schema = UserSchema(many=True)
  
class Post(db.Model):
  id=db.Column(db.Integer, primary_key = True)
  userID = db.Column(db.Integer)
  details = db.Column(db.Text)
  start = db.Column(db.String(200))
  end = db.Column(db.String(200))
  date = db.Column(db.DateTime, default=datetime.datetime.utcnow)
  name = db.Column(db.String(200))
  company = db.Column(db.String(200))


  def __init__(self, userID, details, start, end, date, name,company):
    self.id=None
    self.userID = userID
    self.details = details
    self.start = start
    self.end = end
    self.date = date
    self.name = name
    self.company = company

class PostSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('id','userID','details', 'start', 'end', 'date', 'name', 'company')

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

class Rides(db.Model):
  id=db.Column(db.Integer, primary_key = True)
  owner = db.Column(db.String(200))
  ownerID = db.Column(db.Integer)
  rider = db.Column(db.String(200))
  riderID = db.Column(db.Integer)
  date = db.Column(db.DateTime)
  start = db.Column(db.String(200))
  end = db.Column(db.String(200))

  def __init__(self, owner, ownerID, rider, riderID, date, start, end):
    self.id = None
    self.owner = owner
    self.ownerID = ownerID
    self.rider = rider
    self.riderID = riderID
    self.date = date
    self.start = start
    self.end = end

class RideSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('id','owner', 'ownerID', 'rider', 'riderID', 'date', 'start', 'end')

Ride_schema = RideSchema()
Ride_schema = RideSchema(many=True)

@app.route('/test', methods=['GET'])
def test():
  return jsonify('TEST')


@app.route('/AddPost', methods=["POST"])
def add_post():
  userID = request.json['userID']
  details = request.json['details']
  start = request.json['start']
  end = request.json['end']
  date = datetime.datetime(int(request.json['year']), int(request.json['month']), int(request.json['day']))
  name = request.json['name']
  company = request.json['company']

  newPost = Post(userID, details, start, end, date,name, company)

  db.session.add(newPost)
  db.session.commit()

  response = jsonify("success")
  response.status_code = 200
  return response

@app.route('/GetAllPosts', methods=["GET"])
def get_post():
  all_posts = Post.query.all()
  results = posts_schema.dump(all_posts)
  print(results)

  return jsonify(results)

@app.route('/Post/GetRecent', methods=["GET"])
def get_recent_posts():
  recent = Post.query.all()
  results = posts_schema.dump(recent)
  return jsonify(results)

@app.route('/Post/Search/<start>/<end>', methods=["GET"])
def search_posts(start, end):
  all_posts = Post.query.filter_by(start=start, end= end)
  results = posts_schema.dump(all_posts)
  return jsonify(results)


@app.route('/AddUser', methods=["Post"])
def add_user():
  userID = request.json['id']
  bio = request.json['bio']
  email = request.json['email']
  company = request.json['company']
  homeCity = request.json['homeCity']
  token = request.json['token']
  name = request.json['name']

  new_user = User(userID, bio, email, company, homeCity, token, name)

  db.session.add(new_user)
  db.session.commit()

  response = jsonify('Success')
  response.status_code = 200
  return response

@app.route('/GetAllUsers', methods=["GET"])
def get_users():
  all_users = User.query.all()
  result = users_schema.dump(all_users)
  return jsonify(result)

@app.route('/GetUser/<id>', methods=["GET"])
def get_user(id):
  user = User.query.filter_by(userID=id).first()
  return user_schema.jsonify(user)




if __name__ == '__main__':
   app.run(port=5002)