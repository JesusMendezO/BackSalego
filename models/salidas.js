const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_salidas= sequelize.define(
    "salidas", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        bidon_id: Sequelize.BIGINT,
        cantidad: Sequelize.STRING,
        fecha_ingreso: Sequelize.DATE,
        deleted_at:Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'salidas'
    }
);


module.exports = base_salidas;