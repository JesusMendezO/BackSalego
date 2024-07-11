const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_entradas= sequelize.define(
    "entradas", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        bidon_id: Sequelize.BIGINT,
        cantidad: Sequelize.STRING,
        fecha_ingreso: Sequelize.DATE,
        fecha_documento: Sequelize.DATE,
        folio_documento: Sequelize.STRING,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'entradas'
    }
);


module.exports = base_entradas;