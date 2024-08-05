'use strict'


const base_orden_compras = require('../../models/orden_compras');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Orden_compras(GET)
async function getAllOrden_compras(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM orden_compras `,
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


// Crear Orden_compras(POST)
async function postOrden_compras(req) {

    let data;
    const params = req.body;


    try {
    data = await base_orden_compras.create({
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

// Actualizar Orden_compras(PUT) "arreglado y reconfigurado"
async function putOrden_compras(nOrden_compras, params) {
    try {
        const data = await base_orden_compras.update({
            cierre_id: params.cierre_id,
            fecha: params.fecha,
            folio: params.folio,
            monto: params.monto,
            documento: params.documento,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nOrden_compras: nOrden_compras, bActivo:1  } });

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

// Eliminar Orden_compras(DELETE)
async function deleteOrden_compras(nOrden_compras) {
    try {
        const data = await orden_compras.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nOrden_compras: nOrden_compras, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la orden de compra, verifique los datos.",
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
    getAllOrden_compras,
    postOrden_compras,
    putOrden_compras,
    deleteOrden_compras

};
