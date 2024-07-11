const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_compass_roles= sequelize.define(
    "compass_roles", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'compass_roles'
    }
);


module.exports = base_compass_roles;