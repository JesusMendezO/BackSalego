'use strict'


const base_ajustes = require('../../models/ajustes');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_ajustes = require('../../models/ajustes');

// Obtener Ajustes(GET)
async function getAllAjustes(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM ajustes `,
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


// Crear Ajustes(POST)
async function postAjustes(req) {

    let data;
    const params = req.body;


    try {
    data = await base_ajustes.create({
        bidon_id: params.bidon_id,
        cantidad: params.cantidad,
        fecha_ingreso: params.fecha_ingreso,
        suma: params.suma,
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

// Actualizar Ajustes(PUT)
async function putAjustes(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_ajustes.update(
    {
        bidon_id: params.bidon_id,
        cantidad: params.cantidad,
        fecha_ingreso: params.fecha_ingreso,
        suma: params.suma,
        deleted_at: params.deleted_at,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar los ajustes.",
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

// Eliminar Ajustes(DELETE)
async function deleteAjustes(nAjustes) {
    try {
        const data = await ajustes.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nAjustes: nAjustes, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar algun ajuste, verifique los datos o la configuracion.",
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
    getAllAjustes,
    postAjustes,
    putAjustes,
    deleteAjustes

};
