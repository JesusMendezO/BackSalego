const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_bodegueros = sequelize.define(
    "bodegueros", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        rut: Sequelize.STRING,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'bodegueros'
    }
);


module.exports = base_bodegueros;