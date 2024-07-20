'use strict'


const base_historials = require('../../models/historials');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_historials = require('../../models/historials');

// Obtener Historials(GET)
async function getAllHistorials(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM historials `,
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


// Crear Historials(POST)
async function postHistorials(req) {

    let data;
    const params = req.body;


    try {
    data = await base_historials.create({
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

// Actualizar Historials(PUT)
async function putHistorials(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_historials.update(
    {
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el historials.",
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

// Eliminar Historials(DELETE)
async function deleteHistorials(nHistorials) {
    try {
        const data = await historials.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nHistorials: nHistorials, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el historials seleccionado, verifique los datos.",
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
    getAllHistorials,
    postHistorials,
    putHistorials,
    deleteHistorials

};
