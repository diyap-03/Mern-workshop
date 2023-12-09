const {mongoose} = require('mongoose');
const Schema = mongoose.Schema

const adminSchema = new Schema ({
    username: { type: String, required: true },
    password: { type: String, required: true}
},
{
    timestamp: true
})

const Admins = mongoose.model('Admin',adminSchema)

module.exports = Admins