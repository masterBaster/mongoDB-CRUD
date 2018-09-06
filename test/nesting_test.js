let assert = require('assert');
let mongoose = require('mongoose');
let Author = require('../models/author');

//describe our test
describe('nesting records', function(){

    let pat;
    
    it('creates an authors with sub-dokuments', function(done){
        pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){
            Author.findOne({name:'Patrick Rothfuss'}).then(function(result){
                assert(result.books.length === 1);
                done();
            })
        });
    })
})