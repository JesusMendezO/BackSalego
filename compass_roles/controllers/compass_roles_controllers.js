const service = require('../services/compass_roles_services');
//Obtener compass_roles(GET)
async function getAllCompass_roles(req, res){
    const compass_roles = await service.getAllCompass_roles(req);
    res.status(compass_roles.status).send(compass_roles.data);
}
// crear compass_roles(POST)
async function postCompass_roles(req, res) {
    const compass_roles = await service.postCompass_roles(req);
    res.status(compass_roles.status).send(compass_roles.data);
    console.log(compass_roles.status,"se creo el compass_roles aqui")
}
// actualizar compass_roles(PUT)
async function putCompass_roles(req, res) {
    const params = req.body;
    const id = req.params.id;
    let compass_roles = await service.putCompass_roles(id, params);
    res.status(compass_roles.status).send(compass_roles.data);
}

// eliminar compass_roles(DELETE)
async function deleteCompass_roles(req, res) {
    const params = req.body;
    const nCompass_roles = req.params.nCompass_roles;
    let resultado = await service.eliminarCompass_roles(nCompass_roles);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllCompass_roles,
    postCompass_roles,
    putCompass_roles,
    deleteCompass_roles
};