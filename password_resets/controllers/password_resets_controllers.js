const service = require('../services/password_resets_services');
//Obtener password_resets(GET)
async function getAllPassword_resets(req, res){
    const password_resets = await service.getAllPassword_resets(req);
    res.status(password_resets.status).send(password_resets.data);
}
// crear password_resets(POST)
async function postPassword_resets(req, res) {
    const password_resets = await service.postPassword_resets(req);
    res.status(password_resets.status).send(password_resets.data);
    console.log(password_resets.status,"se creo el password_resets aqui")
}
// actualizar password_resets(PUT)
async function putPassword_resets(req, res) {
    const params = req.body;
    const id = req.params.id;
    let password_resets = await service.putPassword_resets(id, params);
    res.status(password_resets.status).send(password_resets.data);
}

// eliminar password_resets(DELETE)
async function deletePassword_resets(req, res) {
    const params = req.body;
    const nPassword_resets = req.params.nPassword_resets;
    let resultado = await service.eliminarPassword_resets(nPassword_resets);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllPassword_resets,
    postPassword_resets,
    putPassword_resets,
    deletePassword_resets
};