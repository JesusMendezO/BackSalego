const service = require('../services/productos_services');
//Obtener productos(GET)
async function getAllProductos(req, res){
    const productos = await service.getAllProductos(req);
    res.status(productos.status).send(productos.data);
}
// crear productos(POST)
async function postProductos(req, res) {
    const productos = await service.postProductos(req);
    res.status(productos.status).send(productos.data);
    console.log(productos.status,"se creo el productos aqui")
}
// actualizar productos(PUT)
async function putProductos(req, res) {
    const params = req.body;
    const id = req.params.id;
    let productos = await service.putProductos(id, params);
    res.status(productos.status).send(productos.data);
}

// eliminar productos(DELETE)
async function deleteProductos(req, res) {
    const params = req.body;
    const nProductos = req.params.nProductos;
    let resultado = await service.eliminarProductos(nProductos);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllProductos,
    postProductos,
    putProductos,
    deleteProductos
};