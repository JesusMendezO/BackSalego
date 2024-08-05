'use strict'


const base_programacion_precios = require('../../models/programacion_precios');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Programacion_precios(GET)
async function getAllProgramacion_precios(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM programacion_precios `,
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


// Crear Programacion_precios(POST)
async function postProgramacion_precios(req) {

    let data;
    const params = req.body;


    try {
    data = await base_programacion_precios.create({
        empresa_id: params.empresa_id,
        precios: params.precios,
        fecha: params.fecha,
        realizado: params.realizado
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

// Actualizar Programacion_precios(PUT) "arreglado y reconfigurado"
async function putProgramacion_precios(nProgramacion_precios, params) {
    try {
        const data = await base_programacion_precios.update({
            empresa_id: params.empresa_id,
            precios: params.precios,
            fecha: params.fecha,
            realizado: params.realizado,
        }, { where: { nProgramacion_precios: nProgramacion_precios, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar programacion precios, verifique la informacion.",
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

// Eliminar Programacion_precios(DELETE)
async function deleteProgramacion_precios(nProgramacion_precios) {
    try {
        const data = await programacion_precios.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nProgramacion_precios: nProgramacion_precios, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la programacion de precios, verifique los datos.",
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
    getAllProgramacion_precios,
    postProgramacion_precios,
    putProgramacion_precios,
    deleteProgramacion_precios

};
