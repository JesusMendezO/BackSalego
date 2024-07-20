'use strict'


const base_horarios = require('../../models/horarios');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_horarios = require('../../models/horarios');

// Obtener Horarios(GET)
async function getAllHorarios(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM horarios `,
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


// Crear Horarios(POST)
async function postHorarios(req) {

    let data;
    const params = req.body;


    try {
    data = await base_horarios.create({
        empresa_id: params.empresa_id,
        fecha_creacion_inicio: params.fecha_creacion_inicio,
        hora_creacion_inicio: params.hora_creacion_inicio,
        fecha_creacion_fin: params.fecha_creacion_fin,
        fecha_validacion_inicio: params.fecha_validacion_inicio,
        fecha_validacion_fin: params.fecha_validacion_fin,
        hora_validacion_inicio: params.hora_validacion_inicio,
        hora_validacion_fin: params.hora_validacion_fin,
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

// Actualizar Horarios(PUT)
async function putHorarios(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_horarios.update(
    {
        empresa_id: params.empresa_id,
        fecha_creacion_inicio: params.fecha_creacion_inicio,
        hora_creacion_inicio: params.hora_creacion_inicio,
        fecha_creacion_fin: params.fecha_creacion_fin,
        fecha_validacion_inicio: params.fecha_validacion_inicio,
        fecha_validacion_fin: params.fecha_validacion_fin,
        hora_validacion_inicio: params.hora_validacion_inicio,
        hora_validacion_fin: params.hora_validacion_fin,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el horario.",
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

// Eliminar Horarios(DELETE)
async function deleteHorarios(nHorarios) {
    try {
        const data = await horarios.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nHorarios: nHorarios, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el horario seleccionado, verifique los datos.",
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
    getAllHorarios,
    postHorarios,
    putHorarios,
    deleteHorarios

};
