let assert = require('assert');
let mongoose = require('mongoose');
let Author = require('../models/author');

//describe our test
describe('nesting records', function(){


    
    it('creates an authors with sub-dokuments', function(done){
        let pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){
            Author.findOne({name:'Patrick Rothfuss'}).then(function(result){
                assert(result.books.length === 1);
                done();
            })
        });
    });

    it('adds a book to the author', function(done){
        let pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){
            Author.findOne({name:'Patrick Rothfuss'}).then(function(result){
                //add a book to the books collections
                result.books.push({title: "Wise Man's Fear", pages: 500});
                result.save().then(function(){
                    Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                        assert(record.books.length === 2);
                        done();
                    });
                });
            });
        });
    });
});