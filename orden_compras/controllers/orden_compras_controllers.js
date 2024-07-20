const service = require('../services/orden_compras_services');
//Obtener orden_compras(GET)
async function getAllOrden_compras(req, res){
    const orden_compras = await service.getAllOrden_compras(req);
    res.status(orden_compras.status).send(orden_compras.data);
}
// crear orden_compras(POST)
async function postOrden_compras(req, res) {
    const orden_compras = await service.postOrden_compras(req);
    res.status(orden_compras.status).send(orden_compras.data);
    console.log(orden_compras.status,"se creo el orden_compras aqui")
}
// actualizar orden_compras(PUT)
async function putOrden_compras(req, res) {
    const params = req.body;
    const id = req.params.id;
    let orden_compras = await service.putOrden_compras(id, params);
    res.status(orden_compras.status).send(orden_compras.data);
}

// eliminar orden_compras(DELETE)
async function deleteOrden_compras(req, res) {
    const params = req.body;
    const nOrden_compras = req.params.nOrden_compras;
    let resultado = await service.eliminarOrden_compras(nOrden_compras);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllOrden_compras,
    postOrden_compras,
    putOrden_compras,
    deleteOrden_compras
};