const express = require('express');
const router = express.Router();
const fs = require('fs');

const todo = require('../controllers/todo');

// default page
router.get('/', (req, res) => {
    res.send('hi please use /todo/todo.json to navigate to main page');
});

// get data
router.get('/:filename', todo.homePage);

// post data
router.post('/:filename', todo.createTask);

// delete data
router.delete('/:filename', todo.deleteTask);

// update data
router.put('/:filename', todo.updateTask);

module.exports = router;