'use strict'


const base_users = require('../../models/users');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_users = require('../../models/users');

// Obtener Users(GET)
async function getAllUsers(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM users `,
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


// Crear Users(POST)
async function postUsers(req) {

    let data;
    const params = req.body;


    try {
    data = await base_users.create({
        name: params.name,
        email: params.email,
        email_verified_at: params.email_verified_at,
        password: params.password,
        userable_type: params.userable_type,
        userable_id: params.userable_id,
        logistica: params.logistica,
        remember_token: params.remember_token,
        created_at: params.created_at,
        updated_at: params.updated_at,
        deleted_at: params.deleted_at
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

// Actualizar Users(PUT)
async function putUsers(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_users.update(
    {
        name: params.name,
        email: params.email,
        email_verified_at: params.email_verified_at,
        password: params.password,
        userable_type: params.userable_type,
        userable_id: params.userable_id,
        logistica: params.logistica,
        remember_token: params.remember_token,
        created_at: params.created_at,
        updated_at: params.updated_at,
        deleted_at: params.deleted_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el users.",
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

// Eliminar Users(DELETE)
async function deleteUsers(nUsers) {
    try {
        const data = await users.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nUsers: nUsers, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el users, verifique los datos.",
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
    getAllUsers,
    postUsers,
    putUsers,
    deleteUsers

};
