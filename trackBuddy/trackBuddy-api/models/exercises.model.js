const {mongoose} = require('mongoose');
const Schema = mongoose.Schema

//creating schema
const exerciseShema = new Schema({
    username: { type: String, required: true },
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},

},
{
    timestamp: true
})

//creating model
const Exercises =  mongoose.model('Exercise',exerciseShema);

module.exports = Exercises;