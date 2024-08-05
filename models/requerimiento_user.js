const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_requerimiento_user= sequelize.define(
    "requerimiento_user", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: Sequelize.BIGINT,
        requerimiento_id: Sequelize.BIGINT,
        estado: Sequelize.STRING,
        nombre: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'requerimiento_user'
    }
);


module.exports = base_requerimiento_user;