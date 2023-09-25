const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('countries', '', '', {
    dialect: 'sqlite',
    host: 'funrun.sqlite'
});

module.exports = sequelize;