const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_historial_estados= sequelize.define(
    "historial_estados", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        requirimiento_id: Sequelize.BIGINT,
        estado_id: Sequelize.BIGINT,
        user_id: Sequelize.BIGINT,
        observacion: Sequelize.STRING,
        deleted_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'historial_estados'
    }
);


module.exports = base_historial_estados;