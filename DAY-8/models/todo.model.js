const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});
const TodoModel = mongoose.model('User', TodoSchema);
module.exports = TodoModel;