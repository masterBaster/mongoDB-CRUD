let moongose = require('mongoose');

moongose.connect('mongodb://localhost/testaroo');

//once is something like on('click', ) in jquery
moongose.connection.once('open', function(){
    console.log('connection has been made...')
}).on('error', function(error){
    console.log('connection error:', error);
})