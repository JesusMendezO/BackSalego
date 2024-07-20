const service = require('../services/tipo_observacions_services');
//Obtener tipo_observacions(GET)
async function getAllTipo_observacions(req, res){
    const tipo_observacions = await service.getAllTipo_observacions(req);
    res.status(tipo_observacions.status).send(tipo_observacions.data);
}
// crear tipo_observacions(POST)
async function postTipo_observacions(req, res) {
    const tipo_observacions = await service.postTipo_observacions(req);
    res.status(tipo_observacions.status).send(tipo_observacions.data);
    console.log(tipo_observacions.status,"se creo el tipo_observacions aqui")
}
// actualizar tipo_observacions(PUT)
async function putTipo_observacions(req, res) {
    const params = req.body;
    const id = req.params.id;
    let tipo_observacions = await service.putTipo_observacions(id, params);
    res.status(tipo_observacions.status).send(tipo_observacions.data);
}

// eliminar tipo_observacions(DELETE)
async function deleteTipo_observacions(req, res) {
    const params = req.body;
    const nTipo_observacions = req.params.nTipo_observacions;
    let resultado = await service.eliminarTipo_observacions(nTipo_observacions);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllTipo_observacions,
    postTipo_observacions,
    putTipo_observacions,
    deleteTipo_observacions
};