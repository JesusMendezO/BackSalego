const service = require('../services/holdings_services');
//Obtener holdings(GET)
async function getAllHoldings(req, res){
    const holdings = await service.getAllHoldings(req);
    res.status(holdings.status).send(holdings.data);
}
// crear holdings(POST)
async function postHoldings(req, res) {
    const holdings = await service.postHoldings(req);
    res.status(holdings.status).send(holdings.data);
    console.log(holdings.status,"se creo el holdings aqui")
}
// actualizar holdings(PUT)
async function putHoldings(req, res) {
    const params = req.body;
    const id = req.params.id;
    let holdings = await service.putHoldings(id, params);
    res.status(holdings.status).send(holdings.data);
}

// eliminar holdings(DELETE)
async function deleteHoldings(req, res) {
    const params = req.body;
    const nHoldings = req.params.nHoldings;
    let resultado = await service.eliminarHoldings(nHoldings);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllHoldings,
    postHoldings,
    putHoldings,
    deleteHoldings
};