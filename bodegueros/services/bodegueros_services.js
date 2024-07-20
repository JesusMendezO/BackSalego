'use strict'


const base_bodegueros = require('../../models/bodegueros');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_bodegueros = require('../../models/bodegueros');

// Obtener Bodegueros(GET)
async function getAllBodegueros(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM bodegueros `,
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


// Crear Bodegueros(POST)
async function postBodegueros(req) {

    let data;
    const params = req.body;


    try {
    data = await base_bodegueros.create({
        nombre: params.nombre,
        rut: params.rut,
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

// Actualizar Bodegueros(PUT)
async function putBodegueros(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_bodegueros.update(
    {
        nombre: params.nombre,
        rut: params.rut,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el bodegueros.",
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

// Eliminar Bodegueros(DELETE)
async function deleteBodegueros(nBodegueros) {
    try {
        const data = await bodegueros.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nBodegueros: nBodegueros, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el bodegueros seleccionado, verifique los datos.",
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
    getAllBodegueros,
    postBodegueros,
    putBodegueros,
    deleteBodegueros

};
