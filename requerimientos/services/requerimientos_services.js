'use strict'


const base_requerimientos = require('../../models/requerimientos');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_requerimientos = require('../../models/requerimientos');

// Obtener Requerimientos(GET)
async function getAllRequerimientos(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM requerimientos `,
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


// Crear Requerimientos(POST)
async function postRequerimientos(req) {

    let data;
    const params = req.body;


    try {
    data = await base_requerimientos.create({
        nombre: params.nombre,
        dotacion: params.dotacion,
        estado: params.estado,
        folio: params.folio,
        centro_id: params.centro_id,
        transporte_id: params.transporte_id,
        bodeguero_id: params.bodeguero_id,
        observaciones: params.observaciones,
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

// Actualizar Requerimientos(PUT)
async function putRequerimientos(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_requerimientos.update(
    {
        nombre: params.nombre,
        dotacion: params.dotacion,
        estado: params.estado,
        folio: params.folio,
        centro_id: params.centro_id,
        transporte_id: params.transporte_id,
        bodeguero_id: params.bodeguero_id,
        observaciones: params.observaciones,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar los requerimientos.",
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

// Eliminar Requerimientos(DELETE)
async function deleteRequerimientos(nRequerimientos) {
    try {
        const data = await requerimientos.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nRequerimientos: nRequerimientos, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar los requerimientos, verifique los datos.",
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
    getAllRequerimientos,
    postRequerimientos,
    putRequerimientos,
    deleteRequerimientos

};
