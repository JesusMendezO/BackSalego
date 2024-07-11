const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_notificacion_estados= sequelize.define(
    "notificacion_estados", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        estado_id: Sequelize.BIGINT,
        centro: Sequelize.TINYINT,
        supervisor:Sequelize.TINYINT,
        logistica:Sequelize.TINYINT,
        compras: Sequelize.TINYINT,
        despacho: Sequelize.TINYINT,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'notificacion_estados'
    }
);


module.exports = base_notificacion_estados;