const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

router.post('/', async (req, res, next) => {

    // To get todos from DB
    const todoBucket = await Todo.findAll();

    // sending index.html as a response
    res.status(200).json({ status: 'ok', todos: todoBucket });

})

// Exporting router to intigrate the route speacifications through express middlewares
module.exports = router;