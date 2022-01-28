const express = require('express');
const sequelize = require('./utils/database');
require('dotenv').config();

// initialize the express application
const app = express();

/** 
 * Application Configurations
*/

// View Engine
app.set('view engine', 'ejs');

// setting up bodyparser
app.use(express.json())

// Routes
app.use('/', require('./routes/index'));
app.use('/addtodo', require('./routes/addtodo'));
app.use('/deletetodo', require('./routes/deletetodo'));
app.use('/adduser', require('./routes/adduser'));
app.use('/:todo', require('./routes/getTodo'));
app.use('/:user', require('./routes/getUser'));
app.use('/deleteuser', require('./routes/deleteuser'));


/**
 * Application Listener
 */
app.listen(process.env.LOCAL_PORT, (err) => {
    
    // If error occur then application will be going to throw the error message!
    if (err) throw err.message;

    try {
        // postgreSQL
        sequelize.sync({ force: true })
            .then(() => {
                console.log(`Server is listening at port: ${process.env.LOCAl_PORT}!`);
            })
            .catch(err => {
                throw err.message;
            }) 
    } catch (err) {
        throw err.message;
    }

})

