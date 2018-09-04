let assert = require('assert');
let MarioChar = require('../models/mariochar')

describe('finding records', function(){

    let char;

    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario',
            weight: 89,
            superStrenght: true});

            char.save().then(function(){
                assert(char.isNew === false);
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

