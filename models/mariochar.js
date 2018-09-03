let moongose = require('mongoose');
let Schema = moongose.Schema;

let MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

let MarioChar = moongose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;