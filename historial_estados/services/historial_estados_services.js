'use strict'


const base_historial_estados = require('../../models/historial_estados');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_historial_estados = require('../../models/historial_estados');

// Obtener Historial_estados(GET)
async function getAllHistorial_estados(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM historial_estados `,
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


// Crear Historial_estados(POST)
async function postHistorial_estados(req) {

    let data;
    const params = req.body;


    try {
    data = await base_historial_estados.create({
        requerimiento_id: params.requerimiento_id,
        estado_id: params.estado_id,
        user_id: params.user_id,
        observacion: params.observacion,
        deleted_at: params.deleted_at,
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

// Actualizar Historial_estados(PUT)
async function putHistorial_estados(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_historial_estados.update(
    {
        requerimiento_id: params.requerimiento_id,
        estado_id: params.estado_id,
        user_id: params.user_id,
        observacion: params.observacion,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el historial_estados.",
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

// Eliminar Historial_estados(DELETE)
async function deleteHistorial_estados(nHistorial_estados) {
    try {
        const data = await historial_estados.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nHistorial_estados: nHistorial_estados, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el historial_estados seleccionado, verifique los datos.",
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
    getAllHistorial_estados,
    postHistorial_estados,
    putHistorial_estados,
    deleteHistorial_estados

};
