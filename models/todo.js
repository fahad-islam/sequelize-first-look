const sequelize = require('../utils/database');
const Sequelize = require('sequelize');
const User = require('./user');

const Todo = sequelize.define("todo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    todo: {
        type: Sequelize.STRING,
    }
});

// Setting up many-to-many relation between Todo and user
User.belongsToMany(Todo, {
    // foreignKey: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    as: "User",
    foreignKey: 'userId',
    through: "userTodo"
});

Todo.belongsToMany(User, { as: 'Todo', foreignKey: 'todoId', through: 'userTodo' }
);


module.exports = Todo;