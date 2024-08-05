'use strict'


const base_jobs = require('../../models/jobs');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Jobs(GET)
async function getAllJobs(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM jobs `,
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


// Crear Jobs(POST)
async function postJobs(req) {

    let data;
    const params = req.body;


    try {
    data = await base_jobs.create({
        queue: params.queue,
        payload: params.payload,
        attempts: params.attempts,
        reserved_at: params.reserved_at,
        available_at: params.available_at,
        created_at: params.created_at
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

// Actualizar Jobs(PUT) "arreglado y reconfigurado"
async function putJobs(nJobs, params) {
    try {
        const data = await base_jobs.update({
            queue: params.queue,
            payload: params.payload,
            attempts: params.attempts,
            reserved_at: params.reserved_at,
            available_at: params.available_at,
            created_at: params.created_at,
        }, { where: { nJobs: nJobs, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar job, verifique la informacion.",
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

// Eliminar Jobs(DELETE)
async function deleteJobs(nJobs) {
    try {
        const data = await jobs.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nJobs: nJobs, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el jobs seleccionado, verifique los datos.",
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
    getAllJobs,
    postJobs,
    putJobs,
    deleteJobs

};
