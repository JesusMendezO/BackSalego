const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_migrations= sequelize.define(
    "migrations", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        migration: Sequelize.STRING,
        batch: Sequelize.INTEGER
    }, {
        timestamps: false,
        tableName: 'migrations'
    }
);


module.exports = base_migrations;