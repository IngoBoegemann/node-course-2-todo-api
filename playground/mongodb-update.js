//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('59634b73ab5a25f0d3910acb')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('596ca76df3a9e478f9dcff97')
}, {
  $set: {
    name: 'Ingo'
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('596ca76df3a9e478f9dcff97')
}, {
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  //db.close();
});
