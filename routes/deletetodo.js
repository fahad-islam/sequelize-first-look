const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

router.post('/', async (req, res, next) => {

    // To add todo in DB
    Todo.destroy({ where: { id: req.body.id }})
        .then(todoBucket => {
            // sending index.html as a response
            res.status(202).json({ status: 'successfully deleted!', todos: todoBucket });
        })
        .catch(err => console.log("\x1b[32m",err.message));

    

})

// Exporting router to intigrate the route speacifications through express middlewares
module.exports = router;