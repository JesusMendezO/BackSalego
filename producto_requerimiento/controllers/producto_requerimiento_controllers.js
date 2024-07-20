const service = require('../services/producto_requerimiento_services');
//Obtener producto_requerimiento(GET)
async function getAllProducto_requerimiento(req, res){
    const producto_requerimiento = await service.getAllProducto_requerimiento(req);
    res.status(producto_requerimiento.status).send(producto_requerimiento.data);
}
// crear producto_requerimiento(POST)
async function postProducto_requerimiento(req, res) {
    const producto_requerimiento = await service.postProducto_requerimiento(req);
    res.status(producto_requerimiento.status).send(producto_requerimiento.data);
    console.log(producto_requerimiento.status,"se creo el producto_requerimiento aqui")
}
// actualizar producto_requerimiento(PUT)
async function putProducto_requerimiento(req, res) {
    const params = req.body;
    const id = req.params.id;
    let producto_requerimiento = await service.putProducto_requerimiento(id, params);
    res.status(producto_requerimiento.status).send(producto_requerimiento.data);
}

// eliminar producto_requerimiento(DELETE)
async function deleteProducto_requerimiento(req, res) {
    const params = req.body;
    const nProducto_requerimiento = req.params.nProducto_requerimiento;
    let resultado = await service.eliminarProducto_requerimiento(nProducto_requerimiento);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllProducto_requerimiento,
    postProducto_requerimiento,
    putProducto_requerimiento,
    deleteProducto_requerimiento
};