'use strict'


const base_failed_jobs = require('../../models/failed_jobs');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_failed_jobs = require('../../models/failed_jobs');

// Obtener Failed_jobs(GET)
async function getAllFailed_jobs(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM failed_jobs `,
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


// Crear Failed_jobs(POST)
async function postFailed_jobs(req) {

    let data;
    const params = req.body;


    try {
    data = await base_failed_jobs.create({
        connection: params.connection,
        queue: params.queue,
        payload: params.payload,
        exception: params.exception,
        failed_at: params.failed_at
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

// Actualizar Failed_jobs(PUT)
async function putFailed_jobs(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_failed_jobs.update(
    {
        connection: params.connection,
        queue: params.queue,
        payload: params.payload,
        exception: params.exception,
        failed_at: params.failed_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el failed jobs.",
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

// Eliminar Failed_jobs(DELETE)
async function deleteFailed_jobs(nFailed_jobs) {
    try {
        const data = await failed_jobs.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nFailed_jobs: nFailed_jobs, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el failed jobs seleccionado, verifique los datos.",
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
    getAllFailed_jobs,
    postFailed_jobs,
    putFailed_jobs,
    deleteFailed_jobs

};
