let assert = require('assert');
let MarioChar = require('../models/mariochar')

//describe test
describe('saving records', function(){
    //create tests
    it('saves record to the database', function(done){
        let char = new MarioChar({
            name: 'Mario'});

            char.save().then(function(){
                assert(char.isNew === false);
                done();
            })
    });
});

