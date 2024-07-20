const service = require('../services/presupuestos_services');
//Obtener presupuestos(GET)
async function getAllPresupuestos(req, res){
    const presupuestos = await service.getAllPresupuestos(req);
    res.status(presupuestos.status).send(presupuestos.data);
}
// crear presupuestos(POST)
async function postPresupuestos(req, res) {
    const presupuestos = await service.postPresupuestos(req);
    res.status(presupuestos.status).send(presupuestos.data);
    console.log(presupuestos.status,"se creo el presupuestos aqui")
}
// actualizar presupuestos(PUT)
async function putPresupuestos(req, res) {
    const params = req.body;
    const id = req.params.id;
    let presupuestos = await service.putPresupuestos(id, params);
    res.status(presupuestos.status).send(presupuestos.data);
}

// eliminar presupuestos(DELETE)
async function deletePresupuestos(req, res) {
    const params = req.body;
    const nPresupuestos = req.params.nPresupuestos;
    let resultado = await service.eliminarPresupuestos(nPresupuestos);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllPresupuestos,
    postPresupuestos,
    putPresupuestos,
    deletePresupuestos
};