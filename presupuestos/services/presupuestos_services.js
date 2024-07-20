'use strict'


const base_presupuestos = require('../../models/presupuestos');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');
const base_presupuestos = require('../../models/presupuestos');

// Obtener Presupuestos(GET)
async function getAllPresupuestos(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM presupuestos `,
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


// Crear Presupuestos(POST)
async function postPresupuestos(req) {

    let data;
    const params = req.body;


    try {
    data = await base_presupuestos.create({
        monto: params.monto,
        presupuesteable_type: params.presupuesteable_type,
        presupuesteable_id: params.presupuesteable_id,
        fecha_gestion: params.fecha_gestion,
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

// Actualizar Presupuestos(PUT)
async function putPresupuestos(id,params) {
    const params = req.body;
    const id = req.params.id; 


try {
    const data = await base_presupuestos.update(
    {
        monto: params.monto,
        presupuesteable_type: params.presupuesteable_type,
        presupuesteable_id: params.presupuesteable_id,
        fecha_gestion: params.fecha_gestion,
        created_at: params.created_at,
        updated_at: params.updated_at
    },
    { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizar el presupuesto.",
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

// Eliminar Presupuestos(DELETE)
async function deletePresupuestos(nPresupuestos) {
    try {
        const data = await presupuestos.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nPresupuestos: nPresupuestos, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el presupuesto, verifique los datos.",
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
    getAllPresupuestos,
    postPresupuestos,
    putPresupuestos,
    deletePresupuestos

};
