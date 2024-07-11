const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_cierres= sequelize.define(
    "cierres", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        empresa_id: Sequelize.BIGINT,
        desde: Sequelize.DATE,
        hasta: Sequelize.DATE,
        monto: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
        deleted_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'cierres'
    }
);


module.exports = base_cierres;