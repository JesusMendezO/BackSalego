const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_orden_compras= sequelize.define(
    "orden_compras", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        cierre_id: Sequelize.BIGINT,
        fecha: Sequelize.DATE,
        folio:Sequelize.STRING,
        monto:Sequelize.STRING,
        documento: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'orden_compras'
    }
);


module.exports = base_orden_compras;