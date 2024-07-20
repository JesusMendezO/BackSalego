'use strict'


const base_nota_credito_tributarias = require('../../models/nota_credito_tributarias');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_nota_credito_tributarias = require('../../models/nota_credito_tributarias');

// Obtener Nota_credito_tributarias(GET)
async function getAllNota_credito_tributarias(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM nota_credito_tributarias `,
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


// Crear Nota_credito_tributarias(POST)
async function postNota_credito_tributarias(req) {

    let data;
    const params = req.body;


    try {
    data = await base_nota_credito_tributarias.create({
        cierre_id: params.cierre_id,
        fecha: params.fecha,
        folio: params.folio,
        monto: params.monto,
        documento: params.documento,
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

// Actualizar Nota_credito_tributarias(PUT)
async function putNota_credito_tributarias(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_nota_credito_tributarias.update(
    {
        cierre_id: params.cierre_id,
        fecha: params.fecha,
        folio: params.folio,
        monto: params.monto,
        documento: params.documento,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar la nota de credito tributaria.",
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

// Eliminar Nota_credito_tributarias(DELETE)
async function deleteNota_credito_tributarias(nNota_credito_tributarias) {
    try {
        const data = await nota_credito_tributarias.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nNota_credito_tributarias: nNota_credito_tributarias, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la nota de credito tributaria seleccionada, verifique los datos.",
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
    getAllNota_credito_tributarias,
    postNota_credito_tributarias,
    putNota_credito_tributarias,
    deleteNota_credito_tributarias

};
