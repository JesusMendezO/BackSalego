const service = require('../services/entradas_services');
//Obtener entradas(GET)
async function getAllEntradas(req, res){
    const entradas = await service.getAllEntradas(req);
    res.status(entradas.status).send(entradas.data);
}
// crear entradas(POST)
async function postEntradas(req, res) {
    const entradas = await service.postEntradas(req);
    res.status(entradas.status).send(entradas.data);
    console.log(entradas.status,"se creo entrada aqui")
}
// actualizar entradas(PUT)
async function putEntradas(req, res) {
    const params = req.body;
    const id = req.params.id;
    let entradas = await service.putEntradas(id, params);
    res.status(entradas.status).send(entradas.data);
}

// eliminar entradas(DELETE)
async function deleteEntradas(req, res) {
    const params = req.body;
    const nEntradas = req.params.nEntradas;
    let resultado = await service.eliminarEntradas(nEntradas);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllEntradas,
    postEntradas,
    putEntradas,
    deleteEntradas
};