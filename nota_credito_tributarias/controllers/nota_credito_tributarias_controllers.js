const service = require('../services/nota_credito_tributarias_services');
//Obtener nota_credito_tributarias(GET)
async function getAllNota_credito_tributarias(req, res){
    const nota_credito_tributarias = await service.getAllNota_credito_tributarias(req);
    res.status(nota_credito_tributarias.status).send(nota_credito_tributarias.data);
}
// crear nota_credito_tributarias(POST)
async function postNota_credito_tributarias(req, res) {
    const nota_credito_tributarias = await service.postNota_credito_tributarias(req);
    res.status(nota_credito_tributarias.status).send(nota_credito_tributarias.data);
    console.log(nota_credito_tributarias.status,"se creo el nota_credito_tributarias aqui")
}
// actualizar nota_credito_tributarias(PUT)
async function putNota_credito_tributarias(req, res) {
    const params = req.body;
    const id = req.params.id;
    let nota_credito_tributarias = await service.putNota_credito_tributarias(id, params);
    res.status(nota_credito_tributarias.status).send(nota_credito_tributarias.data);
}

// eliminar nota_credito_tributarias(DELETE)
async function deleteNota_credito_tributarias(req, res) {
    const params = req.body;
    const nNota_credito_tributarias = req.params.nNota_credito_tributarias;
    let resultado = await service.eliminarNota_credito_tributarias(nNota_credito_tributarias);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllNota_credito_tributarias,
    postNota_credito_tributarias,
    putNota_credito_tributarias,
    deleteNota_credito_tributarias
};