const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_proveedors= sequelize.define(
    "proveedors", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        razon_social: Sequelize.STRING,
        rut: Sequelize.STRING,
        direccion: Sequelize.STRING,
        comuna:Sequelize.STRING,
        correo:Sequelize.STRING,
        telefono: Sequelize.STRING,
        giro: Sequelize.STRING,
        deleted_at:Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'proveedors'
    }
);


module.exports = base_proveedors;