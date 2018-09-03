let moongose = require('mongoose');

//ES6 Promises
moongose.Promise = global.Promise;

//connection to the db before test run
before(function(done){
    moongose.connect('mongodb://localhost/testaroo');

    //once is something like on('click', ) in jquery
    moongose.connection.once('open', function(){
        console.log('connection has been made...');
        done();
    }).on('error', function(error){
        console.log('connection error:', error);
    });
});
