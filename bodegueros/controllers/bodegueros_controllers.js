const service = require('../services/bodegueros_services');
//Obtener bodegueros(GET)
async function getAllBodegueros(req, res){
    const bodegueros = await service.getAllBodegueros(req);
    res.status(bodegueros.status).send(bodegueros.data);
}
// crear bodegueros(POST)
async function postBodegueros(req, res) {
    const bodegueros = await service.postBodegueros(req);
    res.status(bodegueros.status).send(bodegueros.data);
    console.log(bodegueros.status,"se creo los bodegueros aqui")
}
// actualizar bodegueros(PUT)
async function putBodegueros(req, res) {
    const params = req.body;
    const id = req.params.id;
    let bodegueros = await service.putBodegueros(id, params);
    res.status(bodegueros.status).send(bodegueros.data);
}

// eliminar bodegueros(DELETE)
async function deleteBodegueros(req, res) {
    const params = req.body;
    const nBodegueros = req.params.nBodegueros;
    let resultado = await service.eliminarBodegueros(nBodegueros);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllBodegueros,
    postBodegueros,
    putBodegueros,
    deleteBodegueros
};