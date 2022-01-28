const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

router.post('/', async (req, res, next) => {

    // To add todo in DB
    Todo.create({ todo: req.body.todo })
        .then(todoBucket => {
            // sending index.html as a response
            res.status(201).json({ status: 'ok', todos: todoBucket });
        })
        .catch(err => console.log(err.message));

    

})

// Exporting router to intigrate the route speacifications through express middlewares
module.exports = router;