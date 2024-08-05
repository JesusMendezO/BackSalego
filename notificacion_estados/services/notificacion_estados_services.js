'use strict'


const base_notificacion_estados = require('../../models/notificacion_estados');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Notificacion_estados(GET)
async function getAllNotificacion_estados(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM notificacion_estados `,
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


// Crear Notificacion_estados(POST)
async function postNotificacion_estados(req) {

    let data;
    const params = req.body;


    try {
    data = await base_notificacion_estados.create({
        estado_id: params.estado_id,
        centro: params.centro,
        supervisor: params.supervisor,
        logistica: params.logistica,
        compras: params.compras,
        despacho: params.despacho,
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

// Actualizar Notificacion_estados(PUT) "arreglado y reconfigurado"
async function putNotificacion_estados(nNotificacion_estados, params) {
    try {
        const data = await base_notificacion_estados.update({
            estado_id: params.estado_id,
            centro: params.centro,
            supervisor: params.supervisor,
            logistica: params.logistica,
            compras: params.compras,
            despacho: params.despacho,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nNotificacion_estados: nNotificacion_estados, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar notificacion estado, verifique la informacion.",
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

// Eliminar Notificacion_estados(DELETE)
async function deleteNotificacion_estados(nNotificacion_estados) {
    try {
        const data = await notificacion_estados.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nNotificacion_estados: nNotificacion_estados, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la notificacion de estado, verifique los datos.",
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
    getAllNotificacion_estados,
    postNotificacion_estados,
    putNotificacion_estados,
    deleteNotificacion_estados

};
