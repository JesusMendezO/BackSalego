const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_users= sequelize.define(
    "users", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        email_verified_at: Sequelize.TIME,
        password: Sequelize.STRING,
        userable_type: Sequelize.STRING,
        userable_id: Sequelize.BIGINT,
        logistica: Sequelize.TINYINT,
        remember_token: Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
        deleted_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'users'
    }
);


module.exports = base_users;