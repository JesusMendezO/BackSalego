const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_ajustes = sequelize.define(
    "ajustes", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: Sequelize.STRING,
        fecha_ingreso: Sequelize.DATE,
        suma: Sequelize.TINYINT,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'ajustes'
    }
);


module.exports = base_ajustes;