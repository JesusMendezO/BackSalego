'use strict'


const base_migrations = require('../../models/migrations');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_migrations = require('../../models/migrations');

// Obtener Migrations(GET)
async function getAllMigrations(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM migrations `,
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


// Crear Migrations(POST)
async function postMigrations(req) {

    let data;
    const params = req.body;


    try {
    data = await base_migrations.create({
        migration: params.migration,
        batch: params.batch
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

// Actualizar Migrations(PUT)
async function putMigrations(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_migrations.update(
    {
        nombre: params.nombre,
        migration: params.migration,
        batch: params.batch
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el migrations.",
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

// Eliminar Migrations(DELETE)
async function deleteMigrations(nMigrations) {
    try {
        const data = await migrations.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nMigrations: nMigrations, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el migrations seleccionado, verifique los datos.",
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
    getAllMigrations,
    postMigrations,
    putMigrations,
    deleteMigrations

};
