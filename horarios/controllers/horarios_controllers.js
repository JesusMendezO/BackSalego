const service = require('../services/horarios_services');
//Obtener horarios(GET)
async function getAllHorarios(req, res){
    const horarios = await service.getAllHorarios(req);
    res.status(horarios.status).send(horarios.data);
}
// crear horarios(POST)
async function postHorarios(req, res) {
    const horarios = await service.postHorarios(req);
    res.status(horarios.status).send(horarios.data);
    console.log(horarios.status,"se creo el horarios aqui")
}
// actualizar horarios(PUT)
async function putHorarios(req, res) {
    const params = req.body;
    const id = req.params.id;
    let horarios = await service.putHorarios(id, params);
    res.status(horarios.status).send(horarios.data);
}

// eliminar horarios(DELETE)
async function deleteHorarios(req, res) {
    const params = req.body;
    const nHorarios = req.params.nHorarios;
    let resultado = await service.eliminarHorarios(nHorarios);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllHorarios,
    postHorarios,
    putHorarios,
    deleteHorarios
};