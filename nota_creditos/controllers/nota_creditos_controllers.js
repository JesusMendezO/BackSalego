const service = require('../services/nota_creditos_services');
//Obtener nota_creditos(GET)
async function getAllNota_creditos(req, res){
    const nota_creditos = await service.getAllNota_creditos(req);
    res.status(nota_creditos.status).send(nota_creditos.data);
}
// crear nota_creditos(POST)
async function postNota_creditos(req, res) {
    const nota_creditos = await service.postNota_creditos(req);
    res.status(nota_creditos.status).send(nota_creditos.data);
    console.log(nota_creditos.status,"se creo el nota_creditos aqui")
}
// actualizar nota_creditos(PUT)
async function putNota_creditos(req, res) {
    const params = req.body;
    const id = req.params.id;
    let nota_creditos = await service.putNota_creditos(id, params);
    res.status(nota_creditos.status).send(nota_creditos.data);
}

// eliminar nota_creditos(DELETE)
async function deleteNota_creditos(req, res) {
    const params = req.body;
    const nNota_creditos = req.params.nNota_creditos;
    let resultado = await service.eliminarNota_creditos(nNota_creditos);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllNota_creditos,
    postNota_creditos,
    putNota_creditos,
    deleteNota_creditos
};