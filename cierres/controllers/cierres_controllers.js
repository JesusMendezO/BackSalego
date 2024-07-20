const service = require('../services/cierres_services');
//Obtener cierres(GET)
async function getAllCierres(req, res){
    const cierres = await service.getAllCierres(req);
    res.status(cierres.status).send(cierres.data);
}
// crear cierres(POST)
async function postCierres(req, res) {
    const cierres = await service.postCierres(req);
    res.status(cierres.status).send(cierres.data);
    console.log(cierres.status,"se creo el cierres aqui")
}
// actualizar cierres(PUT)
async function putCierres(req, res) {
    const params = req.body;
    const id = req.params.id;
    let cierres = await service.putCierres(id, params);
    res.status(cierres.status).send(cierres.data);
}

// eliminar cierres(DELETE)
async function deleteCierres(req, res) {
    const params = req.body;
    const nCierres = req.params.nCierres;
    let resultado = await service.eliminarCierres(nCierres);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllCierres,
    postCierres,
    putCierres,
    deleteCierres
};