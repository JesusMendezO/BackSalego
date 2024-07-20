const service = require('../services/estados_services');
//Obtener estados(GET)
async function getAllEstados(req, res){
    const estados = await service.getAllEstados(req);
    res.status(estados.status).send(estados.data);
}
// crear estados(POST)
async function postEstados(req, res) {
    const estados = await service.postEstados(req);
    res.status(estados.status).send(estados.data);
    console.log(estados.status,"se creo el estados aqui")
}
// actualizar estados(PUT)
async function putEstados(req, res) {
    const params = req.body;
    const id = req.params.id;
    let estados = await service.putEstados(id, params);
    res.status(estados.status).send(estados.data);
}

// eliminar estados(DELETE)
async function deleteEstados(req, res) {
    const params = req.body;
    const nEstados = req.params.nEstados;
    let resultado = await service.eliminarEstados(nEstados);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllEstados,
    postEstados,
    putEstados,
    deleteEstados
};