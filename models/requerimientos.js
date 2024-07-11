const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_requerimientos= sequelize.define(
    "requerimientos", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        dotacion: Sequelize.STRING,
        estado: Sequelize.STRING,
        folio: Sequelize.STRING,
        centro_id: Sequelize.BIGINT,
        transporte_id: Sequelize.BIGINT,
        bodeguero_id: Sequelize.BIGINT,
        observaciones: Sequelize.STRING,
        deleted_at:Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'requerimientos'
    }
);


module.exports = base_requerimientos;