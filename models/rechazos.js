const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_rechazos= sequelize.define(
    "rechazos", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        guia_despacho_id: Sequelize.BIGINT,
        producto_id: Sequelize.BIGINT,
        motivo: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
        deleted_at:Sequelize.DATE,
        estado_pago:Sequelize.TINYINT,
        cierre:Sequelize.TINYINT
    }, {
        timestamps: false,
        tableName: 'rechazos'
    }
);


module.exports = base_rechazos;