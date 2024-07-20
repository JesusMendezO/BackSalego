const service = require('../services/jobs_services');
//Obtener jobs(GET)
async function getAllJobs(req, res){
    const jobs = await service.getAllJobs(req);
    res.status(jobs.status).send(jobs.data);
}
// crear jobs(POST)
async function postJobs(req, res) {
    const jobs = await service.postJobs(req);
    res.status(jobs.status).send(jobs.data);
    console.log(jobs.status,"se creo el jobs aqui")
}
// actualizar jobs(PUT)
async function putJobs(req, res) {
    const params = req.body;
    const id = req.params.id;
    let jobs = await service.putJobs(id, params);
    res.status(jobs.status).send(jobs.data);
}

// eliminar jobs(DELETE)
async function deleteJobs(req, res) {
    const params = req.body;
    const nJobs = req.params.nJobs;
    let resultado = await service.eliminarJobs(nJobs);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllJobs,
    postJobs,
    putJobs,
    deleteJobs
};