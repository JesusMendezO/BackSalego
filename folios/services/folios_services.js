'use strict'


const base_folios = require('../../models/folios');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_folios = require('../../models/folios');

// Obtener Folios(GET)
async function getAllFolios(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM folios `,
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


// Crear Folios(POST)
async function postFolios(req) {

    let data;
    const params = req.body;


    try {
    data = await base_folios.create({
        desde: params.desde,
        hasta: params.hasta,
        activo: params.activo,
        ultimo: params.ultimo,
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

// Actualizar Folios(PUT)
async function putFolios(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_folios.update(
    {
        desde: params.desde,
        hasta: params.hasta,
        activo: params.activo,
        ultimo: params.ultimo,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el folio.",
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

// Eliminar Folios(DELETE)
async function deleteFolios(nFolios) {
    try {
        const data = await folios.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nFolios: nFolios, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el folio seleccionado, verifique los datos.",
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
    getAllFolios,
    postFolios,
    putFolios,
    deleteFolios

};
