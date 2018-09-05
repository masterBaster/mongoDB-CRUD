let assert = require('assert');
let MarioChar = require('../models/mariochar')

describe('deleting records', function(){

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

    it('deletes one record from the database', function(done){
        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result === null);
                done();
            });
        });
    });


});

