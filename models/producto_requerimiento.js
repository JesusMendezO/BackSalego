const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_producto_requerimiento= sequelize.define(
    "producto_requerimiento", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        producto_id: Sequelize.BIGINT,
        requerimiento_id: Sequelize.BIGINT,
        cantidad: Sequelize.DECIMAL,
        real:Sequelize.DECIMAL,
        precio:Sequelize.INTEGER,
        observacion: Sequelize.STRING,
        fecha_vencimiento: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'producto_requerimiento'
    }
);


module.exports = base_producto_requerimiento;