const service = require('../services/requerimiento_user_services');
//Obtener requerimiento_user(GET)
async function getAllRequerimiento_user(req, res){
    const requerimiento_user = await service.getAllRequerimiento_user(req);
    res.status(requerimiento_user.status).send(requerimiento_user.data);
}
// crear requerimiento_user(POST)
async function postRequerimiento_user(req, res) {
    const requerimiento_user = await service.postRequerimiento_user(req);
    res.status(requerimiento_user.status).send(requerimiento_user.data);
    console.log(requerimiento_user.status,"se creo el requerimiento_user aqui")
}
// actualizar requerimiento_user(PUT)
async function putRequerimiento_user(req, res) {
    const params = req.body;
    const id = req.params.id;
    let requerimiento_user = await service.putRequerimiento_user(id, params);
    res.status(requerimiento_user.status).send(requerimiento_user.data);
}

// eliminar requerimiento_user(DELETE)
async function deleteRequerimiento_user(req, res) {
    const params = req.body;
    const nRequerimiento_user = req.params.nRequerimiento_user;
    let resultado = await service.eliminarRequerimiento_user(nRequerimiento_user);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllRequerimiento_user,
    postRequerimiento_user,
    putRequerimiento_user,
    deleteRequerimiento_user
};