const service = require('../services/requerimientos_services');
//Obtener requerimientos(GET)
async function getAllRequerimientos(req, res){
    const requerimientos = await service.getAllRequerimientos(req);
    res.status(requerimientos.status).send(requerimientos.data);
}
// crear requerimientos(POST)
async function postRequerimientos(req, res) {
    const requerimientos = await service.postRequerimientos(req);
    res.status(requerimientos.status).send(requerimientos.data);
    console.log(requerimientos.status,"se creo el requerimientos aqui")
}
// actualizar requerimientos(PUT)
async function putRequerimientos(req, res) {
    const params = req.body;
    const id = req.params.id;
    let requerimientos = await service.putRequerimientos(id, params);
    res.status(requerimientos.status).send(requerimientos.data);
}

// eliminar requerimientos(DELETE)
async function deleteRequerimientos(req, res) {
    const params = req.body;
    const nRequerimientos = req.params.nRequerimientos;
    let resultado = await service.eliminarRequerimientos(nRequerimientos);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllRequerimientos,
    postRequerimientos,
    putRequerimientos,
    deleteRequerimientos
};