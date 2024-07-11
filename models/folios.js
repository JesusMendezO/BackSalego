const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_folios= sequelize.define(
    "folios", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        desde: Sequelize.BIGINT,
        hasta: Sequelize.BIGINT,
        activo: Sequelize.TINYINT,
        ultimo:Sequelize.BIGINT,
        failed_at:Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'folios'
    }
);


module.exports = base_folios;