'use strict'


const base_factura_electronicas = require('../../models/factura_electronicas');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Factura_electronicas(GET)
async function getAllFactura_electronicas(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM factura_electronicas `,
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


// Crear Factura_electronicas(POST)
async function postFactura_electronicas(req) {

    let data;
    const params = req.body;


    try {
    data = await base_factura_electronicas.create({
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

// Actualizar Factura_electronicas(PUT) "arreglado y reconfigurado"
async function putFactura_electronicas(nFactura_electronicas, params) {
    try {
        const data = await base_factura_electronicas.update({
            cierre_id: params.cierre_id,
            fecha: params.fecha,
            folio: params.folio,
            monto: params.monto,
            documento: params.documento,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nFactura_electronicas: nFactura_electronicas, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar factura electronica, verifique la informacion.",
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

// Eliminar Factura_electronicas(DELETE)
async function deleteFactura_electronicas(nFactura_electronicas) {
    try {
        const data = await factura_electronicas.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nFactura_electronicas: nFactura_electronicas, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la factura electronica seleccionada, verifique los datos.",
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
    getAllFactura_electronicas,
    postFactura_electronicas,
    putFactura_electronicas,
    deleteFactura_electronicas

};
