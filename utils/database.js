const { Sequelize } = require("sequelize");


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  /* Database name */ "sequelize-first-look",
  /* user name */ "postgres",
  /* Password */ "2582",
  {
    host: "localhost",
    dialect: "postgres",
  }
);


module.exports = sequelize;