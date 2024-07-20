const service = require('../services/guia_despachos_services');
//Obtener guia_despachos(GET)
async function getAllGuia_despachos(req, res){
    const guia_despachos = await service.getAllGuia_despachos(req);
    res.status(guia_despachos.status).send(guia_despachos.data);
}
// crear guia_despachos(POST)
async function postGuia_despachos(req, res) {
    const guia_despachos = await service.postGuia_despachos(req);
    res.status(guia_despachos.status).send(guia_despachos.data);
    console.log(guia_despachos.status,"se creo el guia_despachos aqui")
}
// actualizar guia_despachos(PUT)
async function putGuia_despachos(req, res) {
    const params = req.body;
    const id = req.params.id;
    let guia_despachos = await service.putGuia_despachos(id, params);
    res.status(guia_despachos.status).send(guia_despachos.data);
}

// eliminar guia_despachos(DELETE)
async function deleteGuia_despachos(req, res) {
    const params = req.body;
    const nGuia_despachos = req.params.nGuia_despachos;
    let resultado = await service.eliminarGuia_despachos(nGuia_despachos);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllGuia_despachos,
    postGuia_despachos,
    putGuia_despachos,
    deleteGuia_despachos
};