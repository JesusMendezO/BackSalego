'use strict'


const base_guia_despachos = require('../../models/guia_despachos');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_guia_despachos = require('../../models/guia_despachos');

// Obtener Guia_despachos(GET)
async function getAllGuia_despachos(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM guia_despachos `,
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


// Crear Guia_despachos(POST)
async function postGuia_despachos(req) {

    let data;
    const params = req.body;


    try {
    data = await base_guia_despachos.create({
        requerimiento_id: params.requerimiento_id,
        folio: params.folio,
        fecha: params.fecha,
        rut_receptor: params.rut_receptor,
        razon_social_receptor: params.razon_social_receptor,
        giro_receptor: params.giro_receptor,
        direccion_receptor: params.direccion_receptor,
        comuna_receptor: params.comuna_receptor,
        nombre_receptor: params.nombre_receptor,
        ciudad_receptor: params.ciudad_receptor,
        nombre_centro: params.nombre_centro,
        direccion_destino: params.direccion_destino,
        comuna_destino: params.comuna_destino,
        ciudad_destino: params.ciudad_destino,
        transporte_rut: params.transporte_rut,
        transporte_nombre: params.transporte_nombre,
        febos_id: params.febos_id,
        created_at: params.created_at,
        updated_at: params.updated_at,
        liquidado: params.liquidado
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

// Actualizar Guia_despachos(PUT)
async function putGuia_despachos(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_guia_despachos.update(
    {
        requerimiento_id: params.requerimiento_id,
        folio: params.folio,
        fecha: params.fecha,
        rut_receptor: params.rut_receptor,
        razon_social_receptor: params.razon_social_receptor,
        giro_receptor: params.giro_receptor,
        direccion_receptor: params.direccion_receptor,
        comuna_receptor: params.comuna_receptor,
        nombre_receptor: params.nombre_receptor,
        ciudad_receptor: params.ciudad_receptor,
        nombre_centro: params.nombre_centro,
        direccion_destino: params.direccion_destino,
        comuna_destino: params.comuna_destino,
        ciudad_destino: params.ciudad_destino,
        transporte_rut: params.transporte_rut,
        transporte_nombre: params.transporte_nombre,
        febos_id: params.febos_id,
        created_at: params.created_at,
        updated_at: params.updated_at,
        liquidado: params.liquidado
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar la guia de despacho.",
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

// Eliminar Guia_despachos(DELETE)
async function deleteGuia_despachos(nGuia_despachos) {
    try {
        const data = await guia_despachos.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nGuia_despachos: nGuia_despachos, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la guia de despacho seleccionada, verifique los datos.",
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
    getAllGuia_despachos,
    postGuia_despachos,
    putGuia_despachos,
    deleteGuia_despachos

};
