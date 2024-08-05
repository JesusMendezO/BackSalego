'use strict'


const base_estados = require('../../models/estados');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Estados(GET)
async function getAllEstados(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM estados `,
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


// Crear Estados(POST)
async function postEstados(req) {

    let data;
    const params = req.body;


    try {
    data = await base_estados.create({
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

// Actualizar Estados(PUT) "arreglado y reconfigurado"
async function putEstados(nEstados, params) {
    try {
        const data = await base_estados.update({
            nombre: params.nombre,
            deleted_at: params.deleted_at,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nEstados: nEstados, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar estados, verifique la informacion.",
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

// Eliminar Estados(DELETE)
async function deleteEstados(nEstados) {
    try {
        const data = await estados.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nEstados: nEstados, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el estado seleccionado, verifique los datos.",
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
    getAllEstados,
    postEstados,
    putEstados,
    deleteEstados

};
