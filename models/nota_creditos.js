const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_nota_creditos= sequelize.define(
    "nota_creditos", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        bidon_id: Sequelize.BIGINT,
        cantidad: Sequelize.STRING,
        fecha_ingreso: Sequelize.DATE,
        fecha_documento:Sequelize.DATE,
        folio_documento:Sequelize.STRING,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'nota_creditos'
    }
);


module.exports = base_nota_creditos;