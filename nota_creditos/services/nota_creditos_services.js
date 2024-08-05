'use strict'


const base_nota_creditos = require('../../models/nota_creditos');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Nota_creditos(GET)
async function getAllNota_creditos(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM nota_creditos `,
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


// Crear Nota_creditos(POST)
async function postNota_creditos(req) {

    let data;
    const params = req.body;


    try {
    data = await base_nota_creditos.create({
        bidon_id: params.bidon_id,
        cantidad: params.cantidad,
        fecha_ingreso: params.fecha_ingreso,
        fecha_documento: params.fecha_documento,
        folio_documento: params.folio_documento,
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

// Actualizar Nota_creditos(PUT) "arreglado y reconfigurado"
async function putNota_creditos(nNota_creditos, params) {
    try {
        const data = await base_nota_creditos.update({
            bidon_id: params.bidon_id,
            cantidad: params.cantidad,
            fecha_ingreso: params.fecha_ingreso,
            fecha_documento: params.fecha_documento,
            folio_documento: params.folio_documento,
            deleted_at: params.deleted_at,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nNota_creditos: nNota_creditos, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar nota credito, verifique la informacion.",
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

// Eliminar Nota_creditos(DELETE)
async function deleteNota_creditos(nNota_creditos) {
    try {
        const data = await nota_creditos.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nNota_creditos: nNota_creditos, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la nota de credito seleccionada, verifique los datos.",
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
    getAllNota_creditos,
    postNota_creditos,
    putNota_creditos,
    deleteNota_creditos

};
