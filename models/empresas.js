const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_empresas= sequelize.define(
    "empresas", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        holding_id: Sequelize.BIGINT,
        razon_social: Sequelize.STRING,
        giro: Sequelize.STRING,
        rut: Sequelize.STRING,
        direccion: Sequelize.STRING,
        habilitado: Sequelize.TINYINT,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'empresas'
    }
);


module.exports = base_empresas;