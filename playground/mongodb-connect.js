//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //insert new doc into Users collection (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Ingo',
  //   age: 31,
  //   location: 'Berlin'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('unable to insert user');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
