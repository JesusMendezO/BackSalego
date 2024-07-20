'use strict'


const base_carga_inicials = require('../../models/carga_inicials');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_carga_inicials = require('../../models/carga_inicials');

// Obtener Carga_inicials(GET)
async function getAllCarga_inicials(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM carga_inicials `,
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


// Crear Carga_inicials(POST)
async function postCarga_inicials(req) {

    let data;
    const params = req.body;


    try {
    data = await base_carga_inicials.create({
        bidon_id: params.bidon_id,
        cantidad: params.cantidad,
        fecha_ingreso: params.fecha_ingreso,
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

// Actualizar Carga_inicials(PUT)
async function putCarga_inicials(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_carga_inicials.update(
    {
        bidon_id: params.bidon_id,
        cantidad: params.cantidad,
        fecha_ingreso: params.fecha_ingreso,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el carga_inicials.",
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

// Eliminar Carga_inicials(DELETE)
async function deleteCarga_inicials(nCarga_inicials) {
    try {
        const data = await carga_inicials.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nCarga_inicials: nCarga_inicials, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el carga_inicials seleccionado, verifique los datos.",
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
    getAllCarga_inicials,
    postCarga_inicials,
    putCarga_inicials,
    deleteCarga_inicials

};
