const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_transportes= sequelize.define(
    "transportes", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        abastecimiento_id: Sequelize.BIGINT,
        nombre_chofer: Sequelize.STRING,
        rut_chofer: Sequelize.STRING,
        patente: Sequelize.STRING,
        rut_empresa: Sequelize.STRING,
        contacto: Sequelize.STRING,
        fecha_programada: Sequelize.DATE,
        despachado: Sequelize.TINYINT,
        deleted_at:Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'transportes'
    }
);


module.exports = base_transportes;