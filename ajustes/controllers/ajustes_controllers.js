const service = require('../services/ajustes_services');
//Obtener ajustes(GET)
async function getAllAjustes(req, res){
    const ajustes = await service.getAllAjustes(req);
    res.status(ajustes.status).send(ajustes.data);
}
// crear ajustes(POST)
async function postAjustes(req, res) {
    const ajustes = await service.postAjustes(req);
    res.status(ajustes.status).send(ajustes.data);
    console.log(ajustes.status,"se creo los ajustes aqui")
}
// actualizar ajustes(PUT)
async function putAjustes(req, res) {
    const params = req.body;
    const id = req.params.id;
    let ajustes = await service.putAjustes(id, params);
    res.status(ajustes.status).send(ajustes.data);
}

// eliminar ajustes(DELETE)
async function deleteAjustes(req, res) {
    const params = req.body;
    const nAjustes = req.params.nAjustes;
    let resultado = await service.eliminarAjustes(nAjustes);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllAjustes,
    postAjustes,
    putAjustes,
    deleteAjustes
};