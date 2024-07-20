const service = require('../services/guia_despacho_producto_services');
//Obtener guia_despacho_producto(GET)
async function getAllGuia_despacho_producto(req, res){
    const guia_despacho_producto = await service.getAllGuia_despacho_producto(req);
    res.status(guia_despacho_producto.status).send(guia_despacho_producto.data);
}
// crear guia_despacho_producto(POST)
async function postGuia_despacho_producto(req, res) {
    const guia_despacho_producto = await service.postGuia_despacho_producto(req);
    res.status(guia_despacho_producto.status).send(guia_despacho_producto.data);
    console.log(guia_despacho_producto.status,"se creo el guia_despacho_producto aqui")
}
// actualizar guia_despacho_producto(PUT)
async function putGuia_despacho_producto(req, res) {
    const params = req.body;
    const id = req.params.id;
    let guia_despacho_producto = await service.putGuia_despacho_producto(id, params);
    res.status(guia_despacho_producto.status).send(guia_despacho_producto.data);
}

// eliminar guia_despacho_producto(DELETE)
async function deleteGuia_despacho_producto(req, res) {
    const params = req.body;
    const nGuia_despacho_producto = req.params.nGuia_despacho_producto;
    let resultado = await service.eliminarGuia_despacho_producto(nGuia_despacho_producto);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllGuia_despacho_producto,
    postGuia_despacho_producto,
    putGuia_despacho_producto,
    deleteGuia_despacho_producto
};