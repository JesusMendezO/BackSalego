'use strict'


const base_compass_roles = require('../../models/compass_roles');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');

// Obtener Compass_roles(GET)
async function getAllCompass_roles(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM compass_roles `,
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


// Crear Compass_roles(POST)
async function postCompass_roles(req) {

    let data;
    const params = req.body;


    try {
    data = await base_compass_roles.create({
        name: params.name,
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

// Actualizar Compass_roles(PUT) "arreglado y reconfigurado"
async function putCompass_roles(nCompass_roles, params) {
    try {
        const data = await base_compass_roles.update({
            name: params.name,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nCompass_roles: nCompass_roles, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar compass_roles, verifique la informacion.",
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

// Eliminar Compass_roles(DELETE)
async function deleteCompass_roles(nCompass_roles) {
    try {
        const data = await compass_roles.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nCompass_roles: nCompass_roles, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el compass_roles seleccionado, verifique los datos.",
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
    getAllCompass_roles,
    postCompass_roles,
    putCompass_roles,
    deleteCompass_roles

};
