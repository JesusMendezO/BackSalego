'use strict'


const base_cierres = require('../../models/cierres');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Cierres(GET)
async function getAllCierres(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM cierres `,
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


// Crear Cierres(POST)
async function postCierres(req) {

    let data;
    const params = req.body;


    try {
    data = await base_cierres.create({
        empresa_id: params.empresa_id,
        desde: params.desde,
        hasta: params.hasta,
        monto:params.monto,
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

// Actualizar Cierres(PUT) "arreglado y reconfigurado"
async function putCierres(nCierres, params) {
    try {
        const data = await base_cierres.update({
            empresa_id: params.empresa_id,
            desde: params.desde,
            hasta: params.hasta,
            monto:params.monto,
            created_at: params.created_at,
            updated_at: params.updated_at,
            deleted_at: params.deleted_at,
        }, { where: { nCierres: nCierres, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar cierre, verifique la informacion.",
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

// Eliminar Cierres(DELETE)
async function deleteCierres(nCierres) {
    try {
        const data = await cierres.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nCierres: nCierres, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el cierre seleccionado, verifique los datos.",
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
    getAllCierres,
    postCierres,
    putCierres,
    deleteCierres

};
