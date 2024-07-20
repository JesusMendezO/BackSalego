const service = require('../services/notifications_services');
//Obtener notifications(GET)
async function getAllNotifications(req, res){
    const notifications = await service.getAllNotifications(req);
    res.status(notifications.status).send(notifications.data);
}
// crear notifications(POST)
async function postNotifications(req, res) {
    const notifications = await service.postNotifications(req);
    res.status(notifications.status).send(notifications.data);
    console.log(notifications.status,"se creo el notifications aqui")
}
// actualizar notifications(PUT)
async function putNotifications(req, res) {
    const params = req.body;
    const id = req.params.id;
    let notifications = await service.putNotifications(id, params);
    res.status(notifications.status).send(notifications.data);
}

// eliminar notifications(DELETE)
async function deleteNotifications(req, res) {
    const params = req.body;
    const nNotifications = req.params.nNotifications;
    let resultado = await service.eliminarNotifications(nNotifications);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllNotifications,
    postNotifications,
    putNotifications,
    deleteNotifications
};