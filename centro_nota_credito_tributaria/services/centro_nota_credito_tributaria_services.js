'use strict'


const base_centro_nota_credito_tributaria = require('../../models/centro_nota_credito_tributaria');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');


// Obtener Centro_nota_credito_tributaria(GET)
async function getAllCentro_nota_credito_tributaria(req) {
    let data;
    try {
        data = await sequelize.query(
        `select * FROM centro_nota_credito_tributaria `,
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


// Crear Centro_nota_credito_tributaria(POST)
async function postCentro_nota_credito_tributaria(req) {

    let data;
    const params = req.body;


    try {
    data = await base_centro_nota_credito_tributaria.create({
        nota_credito_tributaria_id: params.nota_credito_tributaria_id,
        centro_id: params.centro_id,
        monto: params.monto,
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

// Actualizar Centro_nota_credito_tributaria(PUT) "arreglado y reconfigurado"
async function putCentro_nota_credito_tributaria(nCentro_nota_credito_tributaria, params) {
    try {
        const data = await base_centro_nota_credito_tributaria.update({
            nota_credito_tributaria_id: params.nota_credito_tributaria_id,
            centro_id: params.centro_id,
            monto: params.monto,
            created_at: params.created_at,
            updated_at: params.updated_at,
        }, { where: { nCentro_nota_credito_tributaria: nCentro_nota_credito_tributaria, bActivo:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar nota credito tributaria, verifique la informacion.",
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

// Eliminar Centro_nota_credito_tributaria(DELETE)
async function deleteCentro_nota_credito_tributaria(nCentro_nota_credito_tributaria) {
    try {
        const data = await centro_nota_credito_tributaria.delete({
            bPublicada: 0,
            bActivo: 0,
            dFecha_Eliminacion: new Date(),
        }, { where: { nCentro_nota_credito_tributaria: nCentro_nota_credito_tributaria, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la nota de credito tributaria seleccionado, verifique los datos.",
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
    getAllCentro_nota_credito_tributaria,
    postCentro_nota_credito_tributaria,
    putCentro_nota_credito_tributaria,
    deleteCentro_nota_credito_tributaria

};
