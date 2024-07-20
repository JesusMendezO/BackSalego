const service = require('../services/transportes_services');
//Obtener transportes(GET)
async function getAllTransportes(req, res){
    const transportes = await service.getAllTransportes(req);
    res.status(transportes.status).send(transportes.data);
}
// crear transportes(POST)
async function postTransportes(req, res) {
    const transportes = await service.postTransportes(req);
    res.status(transportes.status).send(transportes.data);
    console.log(transportes.status,"se creo el transportes aqui")
}
// actualizar transportes(PUT)
async function putTransportes(req, res) {
    const params = req.body;
    const id = req.params.id;
    let transportes = await service.putTransportes(id, params);
    res.status(transportes.status).send(transportes.data);
}

// eliminar transportes(DELETE)
async function deleteTransportes(req, res) {
    const params = req.body;
    const nTransportes = req.params.nTransportes;
    let resultado = await service.eliminarTransportes(nTransportes);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllTransportes,
    postTransportes,
    putTransportes,
    deleteTransportes
};