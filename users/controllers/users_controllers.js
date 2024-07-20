const service = require('../services/users_services');
//Obtener users(GET)
async function getAllUsers(req, res){
    const users = await service.getAllUsers(req);
    res.status(users.status).send(users.data);
}
// crear users(POST)
async function postUsers(req, res) {
    const users = await service.postUsers(req);
    res.status(users.status).send(users.data);
    console.log(users.status,"se creo el users aqui")
}
// actualizar users(PUT)
async function putUsers(req, res) {
    const params = req.body;
    const id = req.params.id;
    let users = await service.putUsers(id, params);
    res.status(users.status).send(users.data);
}

// eliminar users(DELETE)
async function deleteUsers(req, res) {
    const params = req.body;
    const nUsers = req.params.nUsers;
    let resultado = await service.eliminarUsers(nUsers);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllUsers,
    postUsers,
    putUsers,
    deleteUsers
};