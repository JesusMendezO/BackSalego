'use strict'


const base_centros = require('../../models/centros');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');

// Obtener Centros(GET)
async function getAllCentros(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM centros `,
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


// Crear Centros(POST)
async function postCentros(req) {

    let data;
    const params = req.body;


    try {
    data = await base_centros.create({
        empresa_id: params.empresa_id,
        nombre: params.nombre,
        direccion: params.direccion,
        comuna: params.comuna,
        ciudad: params.ciudad,
        zona: params.zona,
        habilitado: params.habilitado,
        dotacion: params.dotacion,
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

// Actualizar Centros(PUT) "arreglado y reconfigurado"
async function putCentros(nCentros, params) {
    try {
        const data = await base_centros.update({
            empresa_id: params.empresa_id,
            nombre: params.nombre,
            direccion: params.direccion,
            comuna: params.comuna,
            ciudad: params.ciudad,
            zona: params.zona,
            habilitado: params.habilitado,
            dotacion: params.dotacion,
            deleted_at: params.deleted_at,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nCentros: nCentros, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar centro, verifique la informacion.",
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

// Eliminar Centros(DELETE)
async function deleteCentros(nCentros) {
    try {
        const data = await centros.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nCentros: nCentros, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el centros seleccionado, verifique los datos.",
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
    getAllCentros,
    postCentros,
    putCentros,
    deleteCentros

};
