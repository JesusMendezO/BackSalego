const service = require('../services/notificacion_estados_services');
//Obtener notificacion_estados(GET)
async function getAllNotificacion_estados(req, res){
    const notificacion_estados = await service.getAllNotificacion_estados(req);
    res.status(notificacion_estados.status).send(notificacion_estados.data);
}
// crear notificacion_estados(POST)
async function postNotificacion_estados(req, res) {
    const notificacion_estados = await service.postNotificacion_estados(req);
    res.status(notificacion_estados.status).send(notificacion_estados.data);
    console.log(notificacion_estados.status,"se creo el notificacion_estados aqui")
}
// actualizar notificacion_estados(PUT)
async function putNotificacion_estados(req, res) {
    const params = req.body;
    const id = req.params.id;
    let notificacion_estados = await service.putNotificacion_estados(id, params);
    res.status(notificacion_estados.status).send(notificacion_estados.data);
}

// eliminar notificacion_estados(DELETE)
async function deleteNotificacion_estados(req, res) {
    const params = req.body;
    const nNotificacion_estados = req.params.nNotificacion_estados;
    let resultado = await service.eliminarNotificacion_estados(nNotificacion_estados);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllNotificacion_estados,
    postNotificacion_estados,
    putNotificacion_estados,
    deleteNotificacion_estados
};