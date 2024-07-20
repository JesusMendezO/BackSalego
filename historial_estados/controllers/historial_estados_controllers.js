const service = require('../services/historial_estados_services');
//Obtener historial_estados(GET)
async function getAllHistorial_estados(req, res){
    const historial_estados = await service.getAllHistorial_estados(req);
    res.status(historial_estados.status).send(historial_estados.data);
}
// crear historial_estados(POST)
async function postHistorial_estados(req, res) {
    const historial_estados = await service.postHistorial_estados(req);
    res.status(historial_estados.status).send(historial_estados.data);
    console.log(historial_estados.status,"se creo el historial_estados aqui")
}
// actualizar historial_estados(PUT)
async function putHistorial_estados(req, res) {
    const params = req.body;
    const id = req.params.id;
    let historial_estados = await service.putHistorial_estados(id, params);
    res.status(historial_estados.status).send(historial_estados.data);
}

// eliminar historial_estados(DELETE)
async function deleteHistorial_estados(req, res) {
    const params = req.body;
    const nHistorial_estados = req.params.nHistorial_estados;
    let resultado = await service.eliminarHistorial_estados(nHistorial_estados);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllHistorial_estados,
    postHistorial_estados,
    putHistorial_estados,
    deleteHistorial_estados
};