const service = require('../services/historials_services');
//Obtener historials(GET)
async function getAllHistorials(req, res){
    const historials = await service.getAllHistorials(req);
    res.status(historials.status).send(historials.data);
}
// crear historials(POST)
async function postHistorials(req, res) {
    const historials = await service.postHistorials(req);
    res.status(historials.status).send(historials.data);
    console.log(historials.status,"se creo el historials aqui")
}
// actualizar historials(PUT)
async function putHistorials(req, res) {
    const params = req.body;
    const id = req.params.id;
    let historials = await service.putHistorials(id, params);
    res.status(historials.status).send(historials.data);
}

// eliminar historials(DELETE)
async function deleteHistorials(req, res) {
    const params = req.body;
    const nHistorials = req.params.nHistorials;
    let resultado = await service.eliminarHistorials(nHistorials);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllHistorials,
    postHistorials,
    putHistorials,
    deleteHistorials
};