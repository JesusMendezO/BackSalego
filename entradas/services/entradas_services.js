'use strict'


const base_entradas = require('../../models/entradas');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');

// Obtener Entradas(GET)
async function getAllEntradas(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM entradas `,
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


// Crear Entradas(POST)
async function postEntradas(req) {

    let data;
    const params = req.body;


    try {
    data = await base_entradas.create({
        bidon_id: params.bidon_id,
        cantidad: params.cantidad,
        fecha_ingreso: params.fecha_ingreso,
        fecha_documento: params.fecha_documento,
        folio_documento: params.folio_documento,
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

// Actualizar Entradas(PUT)
async function putEntradas(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_entradas.update(
    {
        bidon_id: params.bidon_id,
        cantidad: params.cantidad,
        fecha_ingreso: params.fecha_ingreso,
        fecha_documento: params.fecha_documento,
        folio_documento: params.folio_documento,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar la entrada.",
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

// Eliminar Entradas(DELETE)
async function deleteEntradas(nEntradas) {
    try {
        const data = await entradas.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nEntradas: nEntradas, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la entrada seleccionada, verifique la informacion.",
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
    getAllEntradas,
    postEntradas,
    putEntradas,
    deleteEntradas

};
