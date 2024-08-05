'use strict'


const base_centro_orden_compra = require('../../models/centro_orden_compra');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Centro_orden_compra(GET)
async function getAllCentro_orden_compra(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM centro_orden_compra `,
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


// Crear Centro_orden_compra(POST)
async function postCentro_orden_compra(req) {

    let data;
    const params = req.body;


    try {
    data = await base_centro_orden_compra.create({
        centro_id: params.centro_id,
        orden_compra_id: params.orden_compra_id,
        monto: params.monto,
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

// Actualizar Centro_orden_compra(PUT)
async function putCentro_orden_compra(nCentro_orden_compra, params) {
    try {
        const data = await base_centro_orden_compra.update({
            centro_id: params.centro_id,
            orden_compra_id: params.orden_compra_id,
            monto: params.monto,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nCentro_orden_compra: nCentro_orden_compra, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar orden de compra, verifique la informacion.",
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


// Eliminar Centro_orden_compra(DELETE)
async function deleteCentro_orden_compra(nCentro_orden_compra) {
    try {
        const data = await centro_orden_compra.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nCentro_orden_compra: nCentro_orden_compra, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la orden de compra seleccionado, verifique los datos.",
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
    getAllCentro_orden_compra,
    postCentro_orden_compra,
    putCentro_orden_compra,
    deleteCentro_orden_compra

};
