const express = require('express');
const User = require('../models/user');
const Todo = require('../models/todo');
const router = express.Router();


router.post('/', async (req, res, next) => {

    try {
        // To add todo in DB
        User.create({ name: req.body.name, email: req.body.email })
            .then(userDetail => {
                console.log(userDetail);
                // sending index.html as a response
                res.status(201).json({ status: 'ok', userDetail: userDetail });
            })
            .catch(err => {
                res.status(404).json({ status: 'error', error: err.message });
                throw err.message;
            });
        } catch (err) {
            console.log(err.message);
        }
})

// Exporting router to intigrate the route speacifications through express middlewares
module.exports = router;