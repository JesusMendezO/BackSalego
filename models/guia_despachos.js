const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_guia_despachos= sequelize.define(
    "guia_despachos", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        requerimiento_id: Sequelize.BIGINT,
        folio: Sequelize.STRING,
        fecha: Sequelize.STRING,
        rut_receptor:Sequelize.STRING,
        razon_social_receptor:Sequelize.STRING,
        giro_receptor: Sequelize.STRING,
        direccion_receptor: Sequelize.STRING,
        comuna_receptor: Sequelize.STRING,
        nombre_receptor: Sequelize.STRING,
        ciudad_receptor: Sequelize.STRING,
        nombre_centro: Sequelize.STRING,
        direccion_destino: Sequelize.STRING,
        comuna_destino: Sequelize.STRING,
        ciudad_destino: Sequelize.STRING,
        transporte_rut: Sequelize.STRING,
        transporte_nombre: Sequelize.STRING,
        febos_id: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
        liquidado: Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'guia_despachos'
    }
);


module.exports = base_guia_despachos;