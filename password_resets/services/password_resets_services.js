'use strict'


const base_password_resets = require('../../models/password_resets');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Password_resets(GET)
async function getAllPassword_resets(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM password_resets `,
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


// Crear Password_resets(POST)
async function postPassword_resets(req) {

    let data;
    const params = req.body;


    try {
    data = await base_password_resets.create({
        email: params.email,
        token: params.token,
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

// Actualizar Password_resets(PUT) "arreglado y reconfigurado"
async function putPassword_resets(nPassword_resets, params) {
    try {
        const data = await base_password_resets.update({
            email: params.email,
            token: params.token,
            created_at: params.created_at,
        }, { where: { nPassword_resets: nPassword_resets, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar password resets, verifique la informacion.",
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

// Eliminar Password_resets(DELETE)
async function deletePassword_resets(nPassword_resets) {
    try {
        const data = await password_resets.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nPassword_resets: nPassword_resets, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el password_resets, verifique los datos.",
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
    getAllPassword_resets,
    postPassword_resets,
    putPassword_resets,
    deletePassword_resets

};
