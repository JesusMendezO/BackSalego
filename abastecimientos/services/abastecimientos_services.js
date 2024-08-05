'use strict'


const base_abastecimientos = require('../../models/abastecimientos');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');

// Obtener Abastecimientos(GET)
async function getAllAbastecimientos(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM abastecimientos `,
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


// Crear Abastecimientos(POST)
async function postAbastecimientos(req) {

    let data;
    const params = req.body;


    try {
    data = await base_abastecimientos.create({
        nombre: params.nombre,
        comuna: params.comuna,
        ciudad: params.ciudad,
        deleted_at: params.deleted_at,
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

// Actualizar Abastecimientos(PUT) "arreglado y reconfigurado"
async function putAbastecimientos(nAbastecimientos, params) {
    try {
        const data = await base_abastecimientos.update({
            nombre: params.nombre,
            comuna: params.comuna,
            ciudad: params.ciudad,
            deleted_at: params.deleted_at,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nAbastecimientos: nAbastecimientos, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar abastecimiento, verifique la informacion.",
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

// Eliminar Abastecimientos(DELETE)
async function deleteAbastecimientos(nAbastecimientos) {
    try {
        const data = await abastecimientos.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nAbastecimientos: nAbastecimientos, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el abastecimiento seleccionado, verifique la informacion.",
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
    getAllAbastecimientos,
    postAbastecimientos,
    putAbastecimientos,
    deleteAbastecimientos

};
