const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_holdings= sequelize.define(
    "holdings", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'holdings'
    }
);


module.exports = base_holdings;