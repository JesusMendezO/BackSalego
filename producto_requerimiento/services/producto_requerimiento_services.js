'use strict'


const base_producto_requerimiento = require('../../models/producto_requerimiento');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Producto_requerimiento(GET)
async function getAllProducto_requerimiento(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM producto_requerimiento `,
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


// Crear Producto_requerimiento(POST)
async function postProducto_requerimiento(req) {

    let data;
    const params = req.body;


    try {
    data = await base_producto_requerimiento.create({
        producto_id: params.producto_id,
        requerimiento_id: params.requerimiento_id,
        cantidad: params.cantidad,
        real: params.real,
        precio: params.precio,
        observacion: params.observacion,
        fecha_vencimiento: params.fecha_vencimiento,
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

// Actualizar Producto_requerimiento(PUT) "arreglado y reconfigurado"
async function putProducto_requerimiento(nProducto_requerimiento, params) {
    try {
        const data = await base_producto_requerimiento.update({
            producto_id: params.producto_id,
            requerimiento_id: params.requerimiento_id,
            cantidad: params.cantidad,
            real: params.real,
            precio: params.precio,
            observacion: params.observacion,
            fecha_vencimiento: params.fecha_vencimiento,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nProducto_requerimiento: nProducto_requerimiento, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar producto requerimiento, verifique la informacion.",
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

// Eliminar Producto_requerimiento(DELETE)
async function deleteProducto_requerimiento(nProducto_requerimiento) {
    try {
        const data = await producto_requerimiento.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nProducto_requerimiento: nProducto_requerimiento, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el requerimiento del producto, verifique los datos.",
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
    getAllProducto_requerimiento,
    postProducto_requerimiento,
    putProducto_requerimiento,
    deleteProducto_requerimiento

};
