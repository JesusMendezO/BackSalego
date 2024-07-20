const service = require('../services/abastecimientos_services');
//Obtener abastecimientos(GET)
async function getAllAbastecimientos(req, res){
    const abastecimientos = await service.getAllAbastecimientos(req);
    res.status(abastecimientos.status).send(abastecimientos.data);
}
// crear abastecimientos(POST)
async function postAbastecimientos(req, res) {
    const abastecimientos = await service.postAbastecimientos(req);
    res.status(abastecimientos.status).send(abastecimientos.data);
    console.log(abastecimientos.status,"se creo abastecimiento aqui")
}
// actualizar abastecimientos(PUT)
async function putAbastecimientos(req, res) {
    const params = req.body;
    const id = req.params.id;
    let abastecimientos = await service.putAbastecimientos(id, params);
    res.status(abastecimientos.status).send(abastecimientos.data);
}

// eliminar abastecimientos(DELETE)
async function deleteAbastecimientos(req, res) {
    const params = req.body;
    const nAbastecimientos = req.params.nAbastecimientos;
    let resultado = await service.eliminarAbastecimientos(nAbastecimientos);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllAbastecimientos,
    postAbastecimientos,
    putAbastecimientos,
    deleteAbastecimientos
};