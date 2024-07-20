const service = require('../services/carga_inicials_services');
//Obtener carga_inicials(GET)
async function getAllCarga_inicials(req, res){
    const carga_inicials = await service.getAllCarga_inicials(req);
    res.status(carga_inicials.status).send(carga_inicials.data);
}
// crear carga_inicials(POST)
async function postCarga_inicials(req, res) {
    const carga_inicials = await service.postCarga_inicials(req);
    res.status(carga_inicials.status).send(carga_inicials.data);
    console.log(carga_inicials.status,"se creo el carga_inicials aqui")
}
// actualizar carga_inicials(PUT)
async function putCarga_inicials(req, res) {
    const params = req.body;
    const id = req.params.id;
    let carga_inicials = await service.putCarga_inicials(id, params);
    res.status(carga_inicials.status).send(carga_inicials.data);
}

// eliminar carga_inicials(DELETE)
async function deleteCarga_inicials(req, res) {
    const params = req.body;
    const nCarga_inicials = req.params.nCarga_inicials;
    let resultado = await service.eliminarCarga_inicials(nCarga_inicials);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllCarga_inicials,
    postCarga_inicials,
    putCarga_inicials,
    deleteCarga_inicials
};