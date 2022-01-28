const express = require('express');
const Todo = require('../models/todo');
const User = require('../models/user');
const router = express.Router();

router.get('/', async (req, res, next) => {


    // To get users from DB
    User.findAll({ attributes: [ 'id', "email", 'name' ], include: [ Todo ] })
        .then((users) => {

            // users.map( userInside => { 

            //     let { id } = users[users.indexOf(userInside)].dataValues
                
            //     console.log("\x1b[34m------------------------------------\x1b[37m",users[0]);
                
            //     const todos = Todo.findAll({ attributes: ['id', 'todo'], where: { userId: id } });
            //     users[users.indexOf(userInside)].dataValues.todos = todos;
            // })
            return users
        })
        .then ( (users) => {
            // sending index.html as a response
            res.status(200).json({ status: 'ok', users: users });
        })
        .catch( error => {
            res.status(500).json({ status: "error", error: error.message })
        })
    
})

// Exporting router to intigrate the route speacifications through express middlewares
module.exports = router;