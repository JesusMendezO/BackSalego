const service = require('../services/centros_services');
//Obtener centros(GET)
async function getAllCentros(req, res){
    const centros = await service.getAllCentros(req);
    res.status(centros.status).send(centros.data);
}
// crear centros(POST)
async function postCentros(req, res) {
    const centros = await service.postCentros(req);
    res.status(centros.status).send(centros.data);
    console.log(centros.status,"se creo el centros aqui")
}
// actualizar centros(PUT)
async function putCentros(req, res) {
    const params = req.body;
    const id = req.params.id;
    let centros = await service.putCentros(id, params);
    res.status(centros.status).send(centros.data);
}

// eliminar centros(DELETE)
async function deleteCentros(req, res) {
    const params = req.body;
    const nCentros = req.params.nCentros;
    let resultado = await service.eliminarCentros(nCentros);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllCentros,
    postCentros,
    putCentros,
    deleteCentros
};