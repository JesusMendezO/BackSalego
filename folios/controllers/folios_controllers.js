const service = require('../services/folios_services');
//Obtener folios(GET)
async function getAllFolios(req, res){
    const folios = await service.getAllFolios(req);
    res.status(folios.status).send(folios.data);
}
// crear folios(POST)
async function postFolios(req, res) {
    const folios = await service.postFolios(req);
    res.status(folios.status).send(folios.data);
    console.log(folios.status,"se creo el folios aqui")
}
// actualizar folios(PUT)
async function putFolios(req, res) {
    const params = req.body;
    const id = req.params.id;
    let folios = await service.putFolios(id, params);
    res.status(folios.status).send(folios.data);
}

// eliminar folios(DELETE)
async function deleteFolios(req, res) {
    const params = req.body;
    const nFolios = req.params.nFolios;
    let resultado = await service.eliminarFolios(nFolios);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllFolios,
    postFolios,
    putFolios,
    deleteFolios
};