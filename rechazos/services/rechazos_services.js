'use strict'


const base_rechazos = require('../../models/rechazos');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_rechazos = require('../../models/rechazos');

// Obtener Rechazos(GET)
async function getAllRechazos(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM rechazos `,
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


// Crear Rechazos(POST)
async function postRechazos(req) {

    let data;
    const params = req.body;


    try {
    data = await base_rechazos.create({
        guia_despacho_id: params.guia_despacho_id,
        producto_id: params.producto_id,
        motivo: params.motivo,
        created_at: params.created_at,
        updated_at: params.updated_at,
        deleted_at: params.deleted_at,
        estado_pago: params.estado_pago,
        cierre: params.cierre
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

// Actualizar Rechazos(PUT)
async function putRechazos(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_rechazos.update(
    {
        guia_despacho_id: params.guia_despacho_id,
        producto_id: params.producto_id,
        motivo: params.motivo,
        created_at: params.created_at,
        updated_at: params.updated_at,
        deleted_at: params.deleted_at,
        estado_pago: params.estado_pago,
        cierre: params.cierre
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el rechazo.",
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

// Eliminar Rechazos(DELETE)
async function deleteRechazos(nRechazos) {
    try {
        const data = await rechazos.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nRechazos: nRechazos, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el rechazo, verifique los datos.",
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
    getAllRechazos,
    postRechazos,
    putRechazos,
    deleteRechazos

};
