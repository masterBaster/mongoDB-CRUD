let moongose = require('mongoose');
let Schema = moongose.Schema;

let MarioCharSchema = new Schema({
    name: String,
    weight: Number,
    superStrenght: Boolean
});

let MarioChar = moongose.model('mariochar', MarioCharSchema);
let LuigiChar = moongose.model('luigichar', MarioCharSchema);
//mariochar is the name of collections

module.exports = MarioChar;