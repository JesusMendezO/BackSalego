const service = require('../services/salidas_services');
//Obtener salidas(GET)
async function getAllSalidas(req, res){
    const salidas = await service.getAllSalidas(req);
    res.status(salidas.status).send(salidas.data);
}
// crear salidas(POST)
async function postSalidas(req, res) {
    const salidas = await service.postSalidas(req);
    res.status(salidas.status).send(salidas.data);
    console.log(salidas.status,"se creo el salidas aqui")
}
// actualizar salidas(PUT)
async function putSalidas(req, res) {
    const params = req.body;
    const id = req.params.id;
    let salidas = await service.putSalidas(id, params);
    res.status(salidas.status).send(salidas.data);
}

// eliminar salidas(DELETE)
async function deleteSalidas(req, res) {
    const params = req.body;
    const nSalidas = req.params.nSalidas;
    let resultado = await service.eliminarSalidas(nSalidas);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllSalidas,
    postSalidas,
    putSalidas,
    deleteSalidas
};