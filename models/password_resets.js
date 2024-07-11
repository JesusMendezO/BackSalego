const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_password_resets= sequelize.define(
    "password_resets", {
        email: Sequelize.STRING,
        token: Sequelize.STRING,
        folio:Sequelize.STRING,
        created_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'password_resets'
    }
);


module.exports = base_password_resets;