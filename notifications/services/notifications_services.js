'use strict'


const base_notifications = require('../../models/notifications');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Notifications(GET)
async function getAllNotifications(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM notifications `,
    {
        replacements: {
        },
        type: QueryTypes.SELECT
    }
    );
    console.log(data)
    return {
        status: 200,
        error: '',
        data: data[0],
        };

    } catch (err) {
    // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}


// Crear Notifications(POST)
async function postNotifications(req) {

    let data;
    const params = req.body;


    try {
    data = await base_notifications.create({
        type: params.type,
        notifiable_type: params.notifiable_type,
        notifiable_id: params.notifiable_id,
        data: params.data,
        read_at: params.read_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    }),
    console.log(data);
    return {
        status: 200,
        error: '',
        data: data,
    };

} catch (err) {
    return {
        status: 500,
        error: err,
        data: err,
    };
}
}

// Actualizar Notifications(PUT) "arreglado y reconfigurado"
async function putNotifications(nNotifications, params) {
    try {
        const data = await base_notifications.update({
            type: params.type,
            notifiable_type: params.notifiable_type,
            notifiable_id: params.notifiable_id,
            data: params.data,
            read_at: params.read_at,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nNotifications: nNotifications, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar notificacions, verifique la informacion.",
                data,
            };
        } else {
            return {
                status: 200,
                error: "",
                data:  data,
            };
        }
    } catch (err) {
        return {
            status: 500,
            error: err,
            data: err
        };
    }
}

// Eliminar Notifications(DELETE)
async function deleteNotifications(nNotifications) {
    try {
        const data = await notifications.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nNotifications: nNotifications, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la notificacion, verifique los datos.",
                data,
            };
        } else {
            return {
                status: 200,
                error: "",
                data:  data,
            };
        }
    } catch (err) {
        return {
            status: 500,
            error: err,
            data: err
        };
    }
} 


module.exports = {
    getAllNotifications,
    postNotifications,
    putNotifications,
    deleteNotifications

};
