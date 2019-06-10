const Sequelize = require("sequelize");

//Database connection
// const db = new Sequelize('rbkdatabase', "sql7295067", 'sql7295067', '8h14R5EfuH', {
//     host: 'localhost----sql7.freemysqlhosting.net',
//     dialect: 'mysql',
// })

const db = new Sequelize("sql7295067", 'sql7295067', '8h14R5EfuH', {
    host: 'sql7.freemysqlhosting.net',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
})


db.sync({ force: false, logging: false  }).then(() => {
    console.log(`You Just Created The Database!`);
});


module.exports.db = db;
module.exports.Sequelize = Sequelize;
