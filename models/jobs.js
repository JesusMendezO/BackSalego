const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_jobs= sequelize.define(
    "jobs", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        queue: Sequelize.STRING,
        payload: Sequelize.TEXT,
        attempts: Sequelize.TINYINT,
        reserved_at:Sequelize.INTEGER,
        available_at:Sequelize.INTEGER,
        created_at:Sequelize.INTEGER
    }, {
        timestamps: false,
        tableName: 'jobs'
    }
);


module.exports = base_jobs;