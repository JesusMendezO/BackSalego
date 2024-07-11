const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_programacion_precios= sequelize.define(
    "programacion_precios", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        empresa_id: Sequelize.BIGINT,
        precios: Sequelize.STRING,
        fecha: Sequelize.DATE,
        realizado:Sequelize.TINYINT,
    }, {
        timestamps: false,
        tableName: 'programacion_precios'
    }
);


module.exports = base_programacion_precios;