'use strict'


const base_guia_despacho_producto = require('../../models/guia_despacho_producto');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Guia_despacho_producto(GET)
async function getAllGuia_despacho_producto(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM guia_despacho_producto `,
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


// Crear Guia_despacho_producto(POST)
async function postGuia_despacho_producto(req) {

    let data;
    const params = req.body;


    try {
    data = await base_guia_despacho_producto.create({
        guia_despacho_id: params.guia_despacho_id,
        producto_id: params.producto_id,
        cantidad: params.cantidad,
        precio: params.precio,
        real: params.real,
        observacion: params.observacion,
        fecha_vencimiento: params.fecha_vencimiento,
        created_at: params.created_at,
        updated_at: params.updated_at,
        tipo_observacion_id: params.tipo_observacion_id,
        cantidad_recibido: params.cantidad_recibido,
        genera_nc: params.genera_nc,
        liquidado: params.liquidado,
        contenedor: params.contenedor,
        comentario_centro: params.comentario_centro,
        comentario_reclamo: params.comentario_reclamo
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

// Actualizar Guia_despacho_producto(PUT) "arreglado y reconfigurado"
async function putGuia_despacho_producto(nGuia_despacho_producto, params) {
    try {
        const data = await base_guia_despacho_producto.update({
            guia_despacho_id: params.guia_despacho_id,
            producto_id: params.producto_id,
            cantidad: params.cantidad,
            precio: params.precio,
            real: params.real,
            observacion: params.observacion,
            fecha_vencimiento: params.fecha_vencimiento,
            created_at: params.created_at,
            updated_at: params.updated_at,
            tipo_observacion_id: params.tipo_observacion_id,
            cantidad_recibido: params.cantidad_recibido,
            genera_nc: params.genera_nc,
            liquidado: params.liquidado,
            contenedor: params.contenedor,
            comentario_centro: params.comentario_centro,
            comentario_reclamo: params.comentario_reclamo,
        }, { where: { nGuia_despacho_producto: nGuia_despacho_producto, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar guia despacho producto, verifique la informacion.",
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

// Eliminar Guia_despacho_producto(DELETE)
async function deleteGuia_despacho_producto(nGuia_despacho_producto) {
    try {
        const data = await guia_despacho_producto.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nGuia_despacho_producto: nGuia_despacho_producto, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la guia de despacho del producto seleccionada, verifique los datos.",
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
    getAllGuia_despacho_producto,
    postGuia_despacho_producto,
    putGuia_despacho_producto,
    deleteGuia_despacho_producto

};
