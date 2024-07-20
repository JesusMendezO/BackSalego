const service = require('../services/rechazos_services');
//Obtener rechazos(GET)
async function getAllRechazos(req, res){
    const rechazos = await service.getAllRechazos(req);
    res.status(rechazos.status).send(rechazos.data);
}
// crear rechazos(POST)
async function postRechazos(req, res) {
    const rechazos = await service.postRechazos(req);
    res.status(rechazos.status).send(rechazos.data);
    console.log(rechazos.status,"se creo el rechazos aqui")
}
// actualizar rechazos(PUT)
async function putRechazos(req, res) {
    const params = req.body;
    const id = req.params.id;
    let rechazos = await service.putRechazos(id, params);
    res.status(rechazos.status).send(rechazos.data);
}

// eliminar rechazos(DELETE)
async function deleteRechazos(req, res) {
    const params = req.body;
    const nRechazos = req.params.nRechazos;
    let resultado = await service.eliminarRechazos(nRechazos);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllRechazos,
    postRechazos,
    putRechazos,
    deleteRechazos
};