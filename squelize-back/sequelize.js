let Sequelize = require('sequelize');
let userModel = require('./models/user');


const sequelize = new Sequelize('it-beaum', 'sa', '13224449yes',
    {
        host: 'localhost',
        port: 1443,
        dialect: 'mssql',
        dialectOptions: {
            encrypt: true
        }
    });


//initialize class

const User = userModel(sequelize, Sequelize);

//relation



//create table


//create the data base
//{force:true}=>remove tables on every startup and create new ones .
sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`);
    });


module.exports = {
    User
};