'use strict'


const base_holdings = require('../../models/holdings');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Holdings(GET)
async function getAllHoldings(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM holdings `,
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


// Crear Holdings(POST)
async function postHoldings(req) {

    let data;
    const params = req.body;


    try {
    data = await base_holdings.create({
        nombre: params.nombre,
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

// Actualizar Holdings(PUT) "arreglado y reconfigurado"
async function putHoldings(nHoldings, params) {
    try {
        const data = await base_holdings.update({
            nombre: params.nombre,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nHoldings: nHoldings, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar holding, verifique la informacion.",
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

// Eliminar Holdings(DELETE)
async function deleteHoldings(nHoldings) {
    try {
        const data = await holdings.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nHoldings: nHoldings, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar el holdings seleccionado, verifique los datos.",
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
    getAllHoldings,
    postHoldings,
    putHoldings,
    deleteHoldings

};
