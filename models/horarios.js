const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_horarios= sequelize.define(
    "horarios", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        empresa_id: Sequelize.BIGINT,
        fecha_creacion_inicio: Sequelize.STRING,
        hora_creacion_inicio: Sequelize.STRING,
        fecha_creacion_fin:Sequelize.STRING,
        hora_creacion_fin:Sequelize.STRING,
        fecha_validacion_inicio: Sequelize.STRING,
        fecha_validacion_fin: Sequelize.STRING,
        hora_validacion_inicio: Sequelize.STRING,
        hora_validacion_fin: Sequelize.STRING,
        febos_id: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'horarios'
    }
);


module.exports = base_horarios;