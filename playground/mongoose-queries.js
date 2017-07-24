const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5975c7acfe94693009dec32211';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findById(id).then((todos) => {
//   if(!todos){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todos);
// }).catch((e) => console.log(e));

//596cb92a22f1e8dc1b74c731

var userId = '596cb92a22f1e8dc1b74c731';

User.findById(userId).then((users) => {
  if(!users){
    return console.log('ID not found');
  }
  console.log('User by ID', users);
}, (e) => {
  console.log(e)
});
