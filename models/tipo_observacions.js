const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipo_observacions= sequelize.define(
    "tipo_observacions", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        estado: Sequelize.STRING,
        nombre: Sequelize.STRING,
        cantidad: Sequelize.TINYINT,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'tipo_observacions'
    }
);


module.exports = base_tipo_observacions;