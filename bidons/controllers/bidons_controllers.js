const service = require('../services/bidons_services');
//Obtener bidons(GET)
async function getAllBidons(req, res){
    const bidons = await service.getAllBidons(req);
    res.status(bidons.status).send(bidons.data);
}
// crear bidons(POST)
async function postBidons(req, res) {
    const bidons = await service.postBidons(req);
    res.status(bidons.status).send(bidons.data);
    console.log(bidons.status,"se creo bidons aqui")
}
// actualizar bidons(PUT)
async function putBidons(req, res) {
    const params = req.body;
    const id = req.params.id;
    let bidons = await service.putBidons(id, params);
    res.status(bidons.status).send(bidons.data);
}

// eliminar bidons(DELETE)
async function deleteBidons(req, res) {
    const params = req.body;
    const nBidons = req.params.nBidons;
    let resultado = await service.eliminarBidons(nBidons);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllBidons,
    postBidons,
    putBidons,
    deleteBidons
};