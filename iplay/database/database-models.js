const { db, Sequelize } = require('./seq.js');


const User = db.define('user', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    username: {type: Sequelize.STRING, required: true, unique: true},
    password: {type: Sequelize.STRING, required: true},
    userEmail: {type: Sequelize.STRING, required: true},
    phonenumber: {type:Sequelize.INTEGER, required:true}
});

const Address = db.define('address', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    area:{type:Sequelize.STRING, required:true},
    streetName:{type:Sequelize.STRING, required:true},
    buildingNumber:{type:Sequelize.INTEGER, required:true},
    phoneNumber:{type:Sequelize.INTEGER, required:true}
    // location: {type: Sequelize.STRING, required: true},
    // distance: {type: Sequelize.INTEGER, required: false}
})

Address.belongsTo(User); //Add userId foreign key to Place
// User.hasMany(Place); //Add userId foreign key to Place


module.exports.Address = Address;
module.exports.User = User;
