const express = require('express');
const router = express.Router();
const fs = require('fs');

const todo = require('../controllers/todo');

// get data
router.get('/', todo.homePage);

// post data
router.post('/', todo.createTask);

// update data
router.put('/', todo.updateTask);

// delete data
router.delete('/', todo.deleteTask);



module.exports = router;