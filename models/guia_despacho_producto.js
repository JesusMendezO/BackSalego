const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_guia_despacho_producto= sequelize.define(
    "guia_despacho_producto", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        guia_despacho_id: Sequelize.BIGINT,
        producto_id: Sequelize.BIGINT,
        cantidad: Sequelize.STRING,
        precio:Sequelize.STRING,
        real:Sequelize.STRING,
        observacion: Sequelize.STRING,
        fecha_vencimiento: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
        tipo_observacion_id: Sequelize.BIGINT,
        cantidad_recibido: Sequelize.DOUBLE,
        genera_nc: Sequelize.TINYINT,
        liquidado: Sequelize.DATE,
        contenedor: Sequelize.TINYINT,
        comentario_centro: Sequelize.STRING,
        comentario_reclamo: Sequelize.STRING,        
    }, {
        timestamps: false,
        tableName: 'guia_despacho_producto'
    }
);


module.exports = base_guia_despacho_producto;