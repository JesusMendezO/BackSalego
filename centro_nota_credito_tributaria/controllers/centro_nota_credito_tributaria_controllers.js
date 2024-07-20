const service = require('../services/centro_nota_credito_tributaria_services');
//Obtener centro_nota_credito_tributaria(GET)
async function getAllCentro_nota_credito_tributaria(req, res){
    const centro_nota_credito_tributaria = await service.getAllCentro_nota_credito_tributaria(req);
    res.status(centro_nota_credito_tributaria.status).send(centro_nota_credito_tributaria.data);
}
// crear centro_nota_credito_tributaria(POST)
async function postCentro_nota_credito_tributaria(req, res) {
    const centro_nota_credito_tributaria = await service.postCentro_nota_credito_tributaria(req);
    res.status(centro_nota_credito_tributaria.status).send(centro_nota_credito_tributaria.data);
    console.log(centro_nota_credito_tributaria.status,"se creo el centro_nota_credito_tributaria aqui")
}
// actualizar centro_nota_credito_tributaria(PUT)
async function putCentro_nota_credito_tributaria(req, res) {
    const params = req.body;
    const id = req.params.id;
    let centro_nota_credito_tributaria = await service.putCentro_nota_credito_tributaria(id, params);
    res.status(centro_nota_credito_tributaria.status).send(centro_nota_credito_tributaria.data);
}

// eliminar centro_nota_credito_tributaria(DELETE)
async function deleteCentro_nota_credito_tributaria(req, res) {
    const params = req.body;
    const nCentro_nota_credito_tributaria = req.params.nCentro_nota_credito_tributaria;
    let resultado = await service.eliminarCentro_nota_credito_tributaria(nCentro_nota_credito_tributaria);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllCentro_nota_credito_tributaria,
    postCentro_nota_credito_tributaria,
    putCentro_nota_credito_tributaria,
    deleteCentro_nota_credito_tributaria
};