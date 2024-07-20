const service = require('../services/migrations_services');
//Obtener migrations(GET)
async function getAllMigrations(req, res){
    const migrations = await service.getAllMigrations(req);
    res.status(migrations.status).send(migrations.data);
}
// crear migrations(POST)
async function postMigrations(req, res) {
    const migrations = await service.postMigrations(req);
    res.status(migrations.status).send(migrations.data);
    console.log(migrations.status,"se creo el migrations aqui")
}
// actualizar migrations(PUT)
async function putMigrations(req, res) {
    const params = req.body;
    const id = req.params.id;
    let migrations = await service.putMigrations(id, params);
    res.status(migrations.status).send(migrations.data);
}

// eliminar migrations(DELETE)
async function deleteMigrations(req, res) {
    const params = req.body;
    const nMigrations = req.params.nMigrations;
    let resultado = await service.eliminarMigrations(nMigrations);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllMigrations,
    postMigrations,
    putMigrations,
    deleteMigrations
};