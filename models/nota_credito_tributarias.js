const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_nota_credito_tributarias= sequelize.define(
    "nota_credito_tributarias", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        cierre_id: Sequelize.BIGINT,
        fecha: Sequelize.DATE,
        folio:Sequelize.STRING,
        monto:Sequelize.STRING,
        documento: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'nota_credito_tributarias'
    }
);


module.exports = base_nota_credito_tributarias;