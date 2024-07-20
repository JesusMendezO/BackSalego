const service = require('../services/proveedors_services');
//Obtener proveedors(GET)
async function getAllProveedors(req, res){
    const proveedors = await service.getAllProveedors(req);
    res.status(proveedors.status).send(proveedors.data);
}
// crear proveedors(POST)
async function postProveedors(req, res) {
    const proveedors = await service.postProveedors(req);
    res.status(proveedors.status).send(proveedors.data);
    console.log(proveedors.status,"se creo el proveedors aqui")
}
// actualizar proveedors(PUT)
async function putProveedors(req, res) {
    const params = req.body;
    const id = req.params.id;
    let proveedors = await service.putProveedors(id, params);
    res.status(proveedors.status).send(proveedors.data);
}

// eliminar proveedors(DELETE)
async function deleteProveedors(req, res) {
    const params = req.body;
    const nProveedors = req.params.nProveedors;
    let resultado = await service.eliminarProveedors(nProveedors);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllProveedors,
    postProveedors,
    putProveedors,
    deleteProveedors
};