const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_presupuestos= sequelize.define(
    "presupuestos", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        monto: Sequelize.BIGINT,
        presupuesteable_type: Sequelize.STRING,
        presupuesteable_id:Sequelize.BIGINT,
        fecha_gestion:Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'presupuestos'
    }
);


module.exports = base_presupuestos;