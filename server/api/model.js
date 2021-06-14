const mongoose = require('mongoose');

//const drinksSchema = new Schema(drinks);

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, require: true, unique: true },
    email: {type: String, require: true },
});

module.exports = mongoose.model('User', userSchema);