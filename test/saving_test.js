let assert = require('assert');
let MarioChar = require('../models/mariochar');
let Customer = require('../models/customer');

//describe test
describe('saving records', function(){
    //create tests
    it('saves record to the database', function(done){
        let char = new MarioChar({
            name: 'Mario',
            weight: 89,
            superStrenght: true});

            char.save().then(function(){
                assert(char.isNew === false);
                done();
            })
    });
});

describe('saving customer to the db', function(){
    it('save customer to the db', function(done){
        let customer = new Customer({
            first_name: 'John',
            last_name: 'Davis'
        });

        customer.save().then(function(){
            assert(customer.isNew === false);
            done();
        });
    });
});

