const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_notifications= sequelize.define(
    "notifications", {
        id: {
            type: Sequelize.CHAR,
            primaryKey: true,
            autoIncrement: true
        },
        type: Sequelize.STRING,
        notifiable_type: Sequelize.STRING,
        notifiable_id:Sequelize.BIGINT,
        data:Sequelize.TEXT,
        read_at: Sequelize.DATE,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'notifications'
    }
);


module.exports = base_notifications;