'use strict'


const base_empresas = require('../../models/empresas');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');

// Obtener Empresas(GET)
async function getAllEmpresas(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM empresas `,
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


// Crear Empresas(POST)
async function postEmpresas(req) {

    let data;
    const params = req.body;


    try {
    data = await base_empresas.create({
        holding_id: params.holding_id,
        razon_social: params.razon_social,
        giro: params.giro,
        rut: params.rut,
        direccion: params.direccion,
        habilitado: params.habilitado,
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

// Actualizar Empresas(PUT)
async function putEmpresas(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_empresas.update(
    {
        holding_id: params.holding_id,
        razon_social: params.razon_social,
        giro: params.giro,
        rut: params.rut,
        direccion: params.direccion,
        habilitado: params.habilitado,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar la empresa.",
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

// Eliminar Empresas(DELETE)
async function deleteEmpresas(nEmpresas) {
    try {
        const data = await empresas.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nEmpresas: nEmpresas, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la empresa seleccionada, verifique la informacion.",
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
    getAllEmpresas,
    postEmpresas,
    putEmpresas,
    deleteEmpresas

};
