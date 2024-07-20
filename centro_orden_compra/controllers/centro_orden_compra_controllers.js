const service = require('../services/centro_orden_compra_services');
//Obtener centro_orden_compra(GET)
async function getAllCentro_orden_compra(req, res){
    const centro_orden_compra = await service.getAllCentro_orden_compra(req);
    res.status(centro_orden_compra.status).send(centro_orden_compra.data);
}
// crear centro_orden_compra(POST)
async function postCentro_orden_compra(req, res) {
    const centro_orden_compra = await service.postCentro_orden_compra(req);
    res.status(centro_orden_compra.status).send(centro_orden_compra.data);
    console.log(centro_orden_compra.status,"se creo el centro_orden_compra aqui")
}
// actualizar centro_orden_compra(PUT)
async function putCentro_orden_compra(req, res) {
    const params = req.body;
    const id = req.params.id;
    let centro_orden_compra = await service.putCentro_orden_compra(id, params);
    res.status(centro_orden_compra.status).send(centro_orden_compra.data);
}

// eliminar centro_orden_compra(DELETE)
async function deleteCentro_orden_compra(req, res) {
    const params = req.body;
    const nCentro_orden_compra = req.params.nCentro_orden_compra;
    let resultado = await service.eliminarCentro_orden_compra(nCentro_orden_compra);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllCentro_orden_compra,
    postCentro_orden_compra,
    putCentro_orden_compra,
    deleteCentro_orden_compra
};