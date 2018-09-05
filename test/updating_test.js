let assert = require('assert');
let MarioChar = require('../models/mariochar')

describe('updating records', function(){

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

    it('updates one record in the database', function(done){
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === 'Luigi');
                    done();
            });
        });
    });
    it('increments the weight by 1', function(done){
        MarioChar.update({}, { $inc: {weight:1}}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(record){
                assert(record.weight === 90);
                    done();
            });
        });
    });
});

