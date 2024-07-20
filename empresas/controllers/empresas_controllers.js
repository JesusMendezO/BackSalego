const service = require('../services/empresas_services');
//Obtener empresas(GET)
async function getAllEmpresas(req, res){
    const empresas = await service.getAllEmpresas(req);
    res.status(empresas.status).send(empresas.data);
}
// crear empresas(POST)
async function postEmpresas(req, res) {
    const empresas = await service.postEmpresas(req);
    res.status(empresas.status).send(empresas.data);
    console.log(empresas.status,"se creo empresa aqui")
}
// actualizar empresas(PUT)
async function putEmpresas(req, res) {
    const params = req.body;
    const id = req.params.id;
    let empresas = await service.putEmpresas(id, params);
    res.status(empresas.status).send(empresas.data);
}

// eliminar empresas(DELETE)
async function deleteEmpresas(req, res) {
    const params = req.body;
    const nEmpresas = req.params.nEmpresas;
    let resultado = await service.eliminarEmpresas(nEmpresas);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllEmpresas,
    postEmpresas,
    putEmpresas,
    deleteEmpresas
};