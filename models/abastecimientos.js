const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_abastecimientos = sequelize.define(
    "abastecimientos", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        comuna: Sequelize.STRING,
        ciudad: Sequelize.STRING,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'abastecimientos'
    }
);


module.exports = base_abastecimientos;