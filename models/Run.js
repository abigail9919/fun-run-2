const { Model, DataTypes } = require('sequelize');
const sequelize = require('services/database');

class Run extends Model {}

// Initialize the table
Run.init({
    date: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    run_type: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'runs', // Name of the table in the DB
    modelName: 'runs',
    timestamps: false // Won't have CreatedAt or UpdatedAt
});

module.exports = Run;