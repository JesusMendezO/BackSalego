const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_factura_electronica_orden_compra= sequelize.define(
    "factura_electronica_orden_compra", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        factura_electronica_id: Sequelize.BIGINT,
        orden_compra_id: Sequelize.BIGINT,
        monto: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'factura_electronica_orden_compra'
    }
);


module.exports = base_factura_electronica_orden_compra;