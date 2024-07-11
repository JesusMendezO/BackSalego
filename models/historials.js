const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_historials= sequelize.define(
    "historials", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'historials'
    }
);


module.exports = base_historials;