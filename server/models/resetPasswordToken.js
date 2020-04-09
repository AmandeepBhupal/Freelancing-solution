var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resetPasswordTokenSchema = new Schema({
    token: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: { type: Date, expires: 3600*12 }
}, );

module.exports = mongoose.model('ResetPassowrdToken', resetPasswordTokenSchema);