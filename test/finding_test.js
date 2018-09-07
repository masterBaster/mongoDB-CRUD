let assert = require('assert');
let MarioChar = require('../models/mariochar');
let Customer = require('../models/customer');

describe('finding records', function(){

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

    it('find one record from the database', function(done){
        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        });
    });

    it('find one record by ID from the database', function(done){
        MarioChar.findOne({_id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });
});

describe('finding customer in the db', function(){
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
    it('find one customer from the db', function(done){
        Customer.findOne({first_name: 'Joe'}).then(function(record){
            assert(record.first_name === 'Joe');
            done();
        })
    })
    it('find one customer from the db by ID', function(done){
        Customer.findOne({_id: customer._id}).then(function(record){
            assert(record._id.toString() === customer._id.toString());
            done();
        })
    })
})
