const { Model, DataTypes } = require('sequelize');
const sequelize = require('services/database');

class User extends Model {}

// Initialize the table
User.init({
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'users', // Name of the table in the DB
    modelName: 'users',
    timestamps: false // Won't have CreatedAt or UpdatedAt
});

module.exports = User;