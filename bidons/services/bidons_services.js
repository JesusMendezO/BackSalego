'use strict'


const base_bidons = require('../../models/bidons');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_bidons = require('../../models/bidons');

// Obtener Bidons(GET)
async function getAllBidons(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM bidons `,
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


// Crear Bidons(POST)
async function postBidons(req) {

    let data;
    const params = req.body;


    try {
    data = await base_bidons.create({
        proveedor_id: params.proveedor_id,
        codigo: params.codigo,
        nombre: params.nombre,
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

// Actualizar Bidons(PUT)
async function putBidons(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_bidons.update(
    {
        proveedor_id: params.proveedor_id,
        codigo: params.codigo,
        nombre: params.nombre,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el bidons.",
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

// Eliminar Bidons(DELETE)
async function deleteBidons(nBidons) {
    try {
        const data = await bidons.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nBidons: nBidons, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el bidons seleccionado, verifique los datos.",
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
    getAllBidons,
    postBidons,
    putBidons,
    deleteBidons

};
