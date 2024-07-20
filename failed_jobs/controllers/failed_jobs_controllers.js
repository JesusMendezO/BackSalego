const service = require('../services/failed_jobs_services');
//Obtener failed_jobs(GET)
async function getAllFailed_jobs(req, res){
    const failed_jobs = await service.getAllFailed_jobs(req);
    res.status(failed_jobs.status).send(failed_jobs.data);
}
// crear failed_jobs(POST)
async function postFailed_jobs(req, res) {
    const failed_jobs = await service.postFailed_jobs(req);
    res.status(failed_jobs.status).send(failed_jobs.data);
    console.log(failed_jobs.status,"se creo el failed_jobs aqui")
}
// actualizar failed_jobs(PUT)
async function putFailed_jobs(req, res) {
    const params = req.body;
    const id = req.params.id;
    let failed_jobs = await service.putFailed_jobs(id, params);
    res.status(failed_jobs.status).send(failed_jobs.data);
}

// eliminar failed_jobs(DELETE)
async function deleteFailed_jobs(req, res) {
    const params = req.body;
    const nFailed_jobs = req.params.nFailed_jobs;
    let resultado = await service.eliminarFailed_jobs(nFailed_jobs);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllFailed_jobs,
    postFailed_jobs,
    putFailed_jobs,
    deleteFailed_jobs
};