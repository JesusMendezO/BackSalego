const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_estados= sequelize.define(
    "estados", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'estados'
    }
);


module.exports = base_estados;