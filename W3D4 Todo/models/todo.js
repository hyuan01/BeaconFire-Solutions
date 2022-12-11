const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: String,
    description: String,
    status: String,
    priority: String,
    timestamp: Number
});

module.exports = mongoose.model('Todo', TodoSchema);