const Sequelize = require("sequelize");

//Database connection
const db = new Sequelize('rbkdatabase', "sql7295067", 'root', 'rbk', {
    host: 'localhost----sql7.freemysqlhosting.net',
    dialect: 'mysql',
})

db.sync({ force: false, logging: false  }).then(() => {
    console.log(`You Just Created The Database!`);
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
