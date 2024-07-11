const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_failed_jobs= sequelize.define(
    "failed_jobs", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        connection: Sequelize.TEXT,
        queue: Sequelize.TEXT,
        payload: Sequelize.TEXT,
        exception:Sequelize.TEXT,
        failed_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'failed_jobs'
    }
);


module.exports = base_failed_jobs;