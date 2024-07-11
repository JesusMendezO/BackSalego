const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_centro_nota_credito_tributaria= sequelize.define(
    "centro_nota_credito_tributaria", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nota_credito_tributaria_id: Sequelize.BIGINT,
        centro_id: Sequelize.BIGINT,
        monto: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'centro_nota_credito_tributaria'
    }
);


module.exports = base_centro_nota_credito_tributaria;