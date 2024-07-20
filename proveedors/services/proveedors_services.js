'use strict'


const base_proveedors = require('../../models/proveedors');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_proveedors = require('../../models/proveedors');

// Obtener Proveedors(GET)
async function getAllProveedors(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM proveedors `,
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


// Crear Proveedors(POST)
async function postProveedors(req) {

    let data;
    const params = req.body;


    try {
    data = await base_proveedors.create({
        razon_social: params.razon_social,
        rut: params.rut,
        direccion: params.direccion,
        comuna: params.comuna,
        correo: params.correo,
        telefono: params.telefono,
        giro: params.giro,
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

// Actualizar Proveedors(PUT)
async function putProveedors(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_proveedors.update(
    {
        razon_social: params.razon_social,
        rut: params.rut,
        direccion: params.direccion,
        comuna: params.comuna,
        correo: params.correo,
        telefono: params.telefono,
        giro: params.giro,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el proveedor.",
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

// Eliminar Proveedors(DELETE)
async function deleteProveedors(nProveedors) {
    try {
        const data = await proveedors.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nProveedors: nProveedors, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el proveedor, verifique los datos.",
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
    getAllProveedors,
    postProveedors,
    putProveedors,
    deleteProveedors

};
