'use strict'


const base_transportes = require('../../models/transportes');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Transportes(GET)
async function getAllTransportes(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM transportes `,
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


// Crear Transportes(POST)
async function postTransportes(req) {

    let data;
    const params = req.body;


    try {
    data = await base_transportes.create({
        abastecimiento_id: params.abastecimiento_id,
        nombre_chofer: params.nombre_chofer,
        rut_chofer: params.rut_chofer,
        patente: params.patente,
        rut_empresa: params.rut_empresa,
        contacto: params.contacto,
        fecha_programada: params.fecha_programada,
        despachado: params.despachado,
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

// Actualizar Transportes(PUT) "arreglado y reconfigurado"
async function putTransportes(nTransportes, params) {
    try {
        const data = await base_transportes.update({
            abastecimiento_id: params.abastecimiento_id,
            nombre_chofer: params.nombre_chofer,
            rut_chofer: params.rut_chofer,
            patente: params.patente,
            rut_empresa: params.rut_empresa,
            contacto: params.contacto,
            fecha_programada: params.fecha_programada,
            despachado: params.despachado,
            deleted_at: params.deleted_at,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nTransportes: nTransportes, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar transporte, verifique la informacion.",
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

// Eliminar Transportes(DELETE)
async function deleteTransportes(nTransportes) {
    try {
        const data = await transportes.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nTransportes: nTransportes, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el transportes, verifique los datos.",
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
    getAllTransportes,
    postTransportes,
    putTransportes,
    deleteTransportes

};
