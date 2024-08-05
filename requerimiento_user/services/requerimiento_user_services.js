'use strict'


const base_requerimiento_user = require('../../models/requerimiento_user');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Requerimiento_user(GET)
async function getAllRequerimiento_user(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM requerimiento_user `,
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


// Crear Requerimiento_user(POST)
async function postRequerimiento_user(req) {

    let data;
    const params = req.body;


    try {
    data = await base_requerimiento_user.create({
        user_id: params.user_id,
        requerimiento_id: params.requerimiento_id,
        nombre: params.nombre,
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

// Actualizar Requerimiento_user(PUT) "arreglado y reconfigurado"
async function putRequerimiento_user(nRequerimiento_user, params) {
    try {
        const data = await base_requerimiento_user.update({
            user_id: params.user_id,
            requerimiento_id: params.requerimiento_id,
            nombre: params.nombre,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nRequerimiento_user: nRequerimiento_user, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar requerimiento user, verifique la informacion.",
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

// Eliminar Requerimiento_user(DELETE)
async function deleteRequerimiento_user(nRequerimiento_user) {
    try {
        const data = await requerimiento_user.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nRequerimiento_user: nRequerimiento_user, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el requerimiento_user, verifique los datos.",
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
    getAllRequerimiento_user,
    postRequerimiento_user,
    putRequerimiento_user,
    deleteRequerimiento_user

};
