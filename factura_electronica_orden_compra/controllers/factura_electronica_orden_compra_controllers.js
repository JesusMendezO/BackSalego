const service = require('../services/factura_electronica_orden_compra_services');
//Obtener factura_electronica_orden_compra(GET)
async function getAllFactura_electronica_orden_compra(req, res){
    const factura_electronica_orden_compra = await service.getAllFactura_electronica_orden_compra(req);
    res.status(factura_electronica_orden_compra.status).send(factura_electronica_orden_compra.data);
}
// crear factura_electronica_orden_compra(POST)
async function postFactura_electronica_orden_compra(req, res) {
    const factura_electronica_orden_compra = await service.postFactura_electronica_orden_compra(req);
    res.status(factura_electronica_orden_compra.status).send(factura_electronica_orden_compra.data);
    console.log(factura_electronica_orden_compra.status,"se creo el factura_electronica_orden_compra aqui")
}
// actualizar factura_electronica_orden_compra(PUT)
async function putFactura_electronica_orden_compra(req, res) {
    const params = req.body;
    const id = req.params.id;
    let factura_electronica_orden_compra = await service.putFactura_electronica_orden_compra(id, params);
    res.status(factura_electronica_orden_compra.status).send(factura_electronica_orden_compra.data);
}

// eliminar factura_electronica_orden_compra(DELETE)
async function deleteFactura_electronica_orden_compra(req, res) {
    const params = req.body;
    const nFactura_electronica_orden_compra = req.params.nFactura_electronica_orden_compra;
    let resultado = await service.eliminarFactura_electronica_orden_compra(nFactura_electronica_orden_compra);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllFactura_electronica_orden_compra,
    postFactura_electronica_orden_compra,
    putFactura_electronica_orden_compra,
    deleteFactura_electronica_orden_compra
};