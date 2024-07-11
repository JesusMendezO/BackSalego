const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_centros= sequelize.define(
    "centros", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        empresa_id: Sequelize.BIGINT,
        nombre: Sequelize.STRING,
        direccion: Sequelize.STRING,
        comuna: Sequelize.STRING,
        ciudad: Sequelize.STRING,
        zona: Sequelize.STRING,
        habilitado: Sequelize.TINYINT,
        dotacion: Sequelize.STRING,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'centros'
    }
);


module.exports = base_centros;