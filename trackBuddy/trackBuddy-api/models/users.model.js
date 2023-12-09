const { mongoose } = require("mongoose");
const Schema = mongoose.Schema

const usersSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    age:{
        type: Number,
    }
},{
    timestamp: true,
});

const Users =mongoose.model('User', usersSchema);


module.exports = Users;