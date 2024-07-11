const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_productos= sequelize.define(
    "productos", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        empresa_id: Sequelize.BIGINT,
        sku: Sequelize.STRING,
        detalle: Sequelize.STRING,
        costo:Sequelize.INTEGER,
        venta:Sequelize.INTEGER,
        desde: Sequelize.DATE,
        hasta: Sequelize.DATE,
        deleted_at:Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
        marca: Sequelize.STRING,
        familia: Sequelize.STRING,
        reemplazo: Sequelize.TINYINT,
        formato: Sequelize.STRING,
    }, {
        timestamps: false,
        tableName: 'productos'
    }
);


module.exports = base_productos;