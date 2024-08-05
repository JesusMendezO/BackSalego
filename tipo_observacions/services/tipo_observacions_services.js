'use strict'


const base_tipo_observacions = require('../../models/tipo_observacions');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Tipo_observacions(GET)
async function getAllTipo_observacions(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM tipo_observacions `,
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


// Crear Tipo_observacions(POST)
async function postTipo_observacions(req) {

    let data;
    const params = req.body;


    try {
    data = await base_tipo_observacions.create({
        estado: params.estado,
        nombre: params.nombre,
        cantidad: params.cantidad,
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

// Actualizar Tipo_observacions(PUT) "arreglado y reconfigurado"
async function putTipo_observacions(nTipo_observacions, params) {
    try {
        const data = await base_tipo_observacions.update({
            estado: params.estado,
            nombre: params.nombre,
            cantidad: params.cantidad,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nTipo_observacions: nTipo_observacions, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar tipo observacions, verifique la informacion.",
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

// Eliminar Tipo_observacions(DELETE)
async function deleteTipo_observacions(nTipo_observacions) {
    try {
        const data = await tipo_observacions.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nTipo_observacions: nTipo_observacions, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el tipo_observacions, verifique los datos.",
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
    getAllTipo_observacions,
    postTipo_observacions,
    putTipo_observacions,
    deleteTipo_observacions

};
