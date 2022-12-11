const fs = require('fs');
const Todo = require('../models/todo');

// display the HOME PAGE
module.exports.homePage = async (req, res) => {
    const data = await Todo.find({});
    res.render('home', { data });
};


// create a NEW TASK
module.exports.createTask = async (req, res) => {
    // add timestamp
    req.body.timestamp = Date.now();
    console.log(req.body);
    const task = new Todo(req.body);
    await task.save();
    console.log(task);
    res.redirect('/todo');
};

module.exports.updateTask = async (req, res) => {
    // need this to know what json we are changing
    const task = await Todo.findById(req.body.edit);
    console.log(task);
    task.title = req.body.title;
    task.description = req.body.description;
    task.status = req.body.status;
    task.priority = req.body.priority;
    await task.save();
    res.redirect('/todo');
};


// DELETE a TASK
module.exports.deleteTask = async (req, res) => {
    // need this to know what json object we are changing
    await Todo.findByIdAndDelete(req.body.delete);
    res.redirect('/todo');
};

