const service = require('../services/programacion_precios_services');
//Obtener programacion_precios(GET)
async function getAllProgramacion_precios(req, res){
    const programacion_precios = await service.getAllProgramacion_precios(req);
    res.status(programacion_precios.status).send(programacion_precios.data);
}
// crear programacion_precios(POST)
async function postProgramacion_precios(req, res) {
    const programacion_precios = await service.postProgramacion_precios(req);
    res.status(programacion_precios.status).send(programacion_precios.data);
    console.log(programacion_precios.status,"se creo el programacion_precios aqui")
}
// actualizar programacion_precios(PUT)
async function putProgramacion_precios(req, res) {
    const params = req.body;
    const id = req.params.id;
    let programacion_precios = await service.putProgramacion_precios(id, params);
    res.status(programacion_precios.status).send(programacion_precios.data);
}

// eliminar programacion_precios(DELETE)
async function deleteProgramacion_precios(req, res) {
    const params = req.body;
    const nProgramacion_precios = req.params.nProgramacion_precios;
    let resultado = await service.eliminarProgramacion_precios(nProgramacion_precios);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllProgramacion_precios,
    postProgramacion_precios,
    putProgramacion_precios,
    deleteProgramacion_precios
};