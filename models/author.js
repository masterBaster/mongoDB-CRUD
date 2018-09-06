let moongose = require('mongoose');
let Schema = moongose.Schema;

let BookSchema = new Schema({
    title: String,
    pages: Number,
});

let AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});


let Author = moongose.model('author', AuthorSchema);

module.exports = Author;