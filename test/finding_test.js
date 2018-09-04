let assert = require('assert');
let MarioChar = require('../models/mariochar')

describe('finding records', function(){

    beforeEach(function(done){
        let char = new MarioChar({
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
        })
    });
});

