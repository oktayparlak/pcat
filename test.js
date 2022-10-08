// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// //connect DB
// mongoose.connect('mongodb://localhost/pcat-test-db');

// //create schema
// const PhotoSchema = new Schema({
//   title: String,
//   description: String,
// });

// const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 1 lorem ipsum',
// });

//read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//update a photo
// const id = '634009d226b7927a3b28a438';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo title 111 updated',
//     description: 'Photo description 111 updated',
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete a photo
// const id = '63400b54187f10dc6a16da1f';
// Photo.findByIdAndDelete(id, (err, data) => {
//   console.log('Photo is removed..');
// });
