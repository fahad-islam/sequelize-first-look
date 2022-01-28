const express = require('express');
const Todo = require('../models/todo');
const User = require('../models/user');
const router = express.Router();

router.post('/', async (req, res, next) => {

    try {
        // To add todo in DB
        Todo.create({ todo: req.body.todo })
            .then(async (todoBucket) => {
                const user = await User.findOne({ where: { id: req.body.userId } });
                const todo = await Todo.findOne({ where: { id: todoBucket.dataValues.id } });
                todoBucket = await user.addUser(todo) // .addUser(user)
                console.log(todoBucket);
                // sending index.html as a response
                res.status(201).json({ status: 'ok', todos: todoBucket });
            })
            .catch(err => {
                if (err.original) {if (err.original.code === "23503") {
                    res.status(404).json({ api: { status: "Not Found!", message: "User not Found with this user Id!" } })
                }} else {
                    res.status(404).json({ status: 'error', error: err.message });
                    console.log("\nThis is error\n",JSON.stringify(err));
                }
            });
        } catch (err) {
            console.log(err.message);
        }
})

// Exporting router to intigrate the route speacifications through express middlewares
module.exports = router;