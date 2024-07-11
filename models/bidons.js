const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_bidons = sequelize.define(
    "bidons", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        proveedor_id: Sequelize.BIGINT,
        codigo: Sequelize.STRING,
        nombre: Sequelize.STRING,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'bidons'
    }
);


module.exports = base_bidons;