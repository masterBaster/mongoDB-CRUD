let assert = require('assert');
let MarioChar = require('../models/mariochar');
let Customer = require('../models/customer');

describe('deleting records', function(){

    let char;

    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario',
            weight: 89,
            superStrenght: true});

            char.save().then(function(){
                done();
            });
    });

    it('deletes one record from the database', function(done){
        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result === null);
                done();
            });
        });
    });
});

describe('deleting customers', function(){
    let customer;
    beforeEach(function(done){
        customer = new Customer({
            first_name: 'Joe',
            last_name: 'Davis'
        });
        customer.save().then(function(){
            done();
        })
    })
    it('deletes one customer from the db', function(done){
        Customer.findOneAndRemove({first_name: 'Joe'}).then(function(){
            Customer.findOne({first_name: 'Joe'}).then(function(record){
                assert(record === null);
                done();
            })
        })
    })
})

