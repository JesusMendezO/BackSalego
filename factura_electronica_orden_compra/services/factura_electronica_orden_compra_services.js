'use strict'


const base_factura_electronica_orden_compra = require('../../models/factura_electronica_orden_compra');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_factura_electronica_orden_compra = require('../../models/factura_electronica_orden_compra');

// Obtener Factura_electronica_orden_compra(GET)
async function getAllFactura_electronica_orden_compra(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM factura_electronica_orden_compra `,
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


// Crear Factura_electronica_orden_compra(POST)
async function postFactura_electronica_orden_compra(req) {

    let data;
    const params = req.body;


    try {
    data = await base_factura_electronica_orden_compra.create({
        factura_electronica_id: params.factura_electronica_id,
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

// Actualizar Factura_electronica_orden_compra(PUT)
async function putFactura_electronica_orden_compra(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_factura_electronica_orden_compra.update(
    {
        factura_electronica_id: params.factura_electronica_id,
        orden_compra_id: params.orden_compra_id,
        monto: params.monto,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar la factura electronica de la orden de compra.",
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

// Eliminar Factura_electronica_orden_compra(DELETE)
async function deleteFactura_electronica_orden_compra(nFactura_electronica_orden_compra) {
    try {
        const data = await factura_electronica_orden_compra.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nFactura_electronica_orden_compra: nFactura_electronica_orden_compra, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la factura electronica de la orden de compra seleccionada, verifique los datos.",
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
    getAllFactura_electronica_orden_compra,
    postFactura_electronica_orden_compra,
    putFactura_electronica_orden_compra,
    deleteFactura_electronica_orden_compra

};
