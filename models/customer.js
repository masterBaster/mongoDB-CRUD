let moongose = require('mongoose');
let Schema = moongose.Schema;

let AddressSchema = new Schema({
    street: String,
    city: String,
    country: String
})

let ContactsSchema = new Schema({
    name: String,
    relationship: String
})

let CustomerSchema = new Schema({
    first_name: String,
    last_name: String,
    address: [AddressSchema],
    contacts: [ContactsSchema]
})

let Customer = moongose.model('customer', CustomerSchema);

module.exports = Customer;