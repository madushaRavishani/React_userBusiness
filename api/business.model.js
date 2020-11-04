const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let businessSchema = new Schema({
    person_name : { type : String},
    business_name : { type : String},
    business_nic_number : { type : String}
},
    {collection : 'businesses'}
);

module.exports = mongoose.model( 'Business', businessSchema);