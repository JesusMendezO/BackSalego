'use strict'


const base_salidas = require('../../models/salidas');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_salidas = require('../../models/salidas');

// Obtener Salidas(GET)
async function getAllSalidas(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM salidas `,
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


// Crear Salidas(POST)
async function postSalidas(req) {

    let data;
    const params = req.body;


    try {
    data = await base_salidas.create({
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

// Actualizar Salidas(PUT)
async function putSalidas(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_salidas.update(
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
            error: "Problema al actualizar las salidas.",
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

// Eliminar Salidas(DELETE)
async function deleteSalidas(nSalidas) {
    try {
        const data = await salidas.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nSalidas: nSalidas, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar las salidas, verifique los datos.",
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
    getAllSalidas,
    postSalidas,
    putSalidas,
    deleteSalidas

};
