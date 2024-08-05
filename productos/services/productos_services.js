'use strict'


const base_productos = require('../../models/productos');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Productos(GET)
async function getAllProductos(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM productos `,
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


// Crear Productos(POST)
async function postProductos(req) {

    let data;
    const params = req.body;


    try {
    data = await base_productos.create({
        empresa_id: params.empresa_id,
        sku: params.sku,
        detalle: params.detalle,
        costo: params.costo,
        venta: params.venta,
        desde: params.desde,
        hasta: params.hasta,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at,
        marca: params.marca,
        familia: params.familia,
        reemplazo: params.reemplazo,
        formato: params.formato
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

// Actualizar Productos(PUT) "arreglado y reconfigurado"
async function putProductos(nProductos, params) {
    try {
        const data = await base_productos.update({
            empresa_id: params.empresa_id,
            sku: params.sku,
            detalle: params.detalle,
            costo: params.costo,
            venta: params.venta,
            desde: params.desde,
            hasta: params.hasta,
            deleted_at: params.deleted_at,
            created_at: params.created_at,
            updated_at: params.updated_at,
            marca: params.marca,
            familia: params.familia,
            reemplazo: params.reemplazo,
            formato: params.formato,
        }, { where: { nProductos: nProductos, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar producto, verifique la informacion.",
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

// Eliminar Productos(DELETE)
async function deleteProductos(nProductos) {
    try {
        const data = await productos.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nProductos: nProductos, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el producto, verifique los datos.",
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
    getAllProductos,
    postProductos,
    putProductos,
    deleteProductos

};
