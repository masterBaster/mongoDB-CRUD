let moongose = require('mongoose');
let Schema = moongose.Schema;

let MarioCharSchema = new Schema({
    name: String,
    weight: Number,
    superStrenght: Boolean
});

let MarioChar = moongose.model('mariochar', MarioCharSchema);
//mariochar is the name of collections

module.exports = MarioChar;