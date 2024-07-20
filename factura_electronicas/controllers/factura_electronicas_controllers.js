const service = require('../services/factura_electronicas_services');
//Obtener factura_electronicas(GET)
async function getAllFactura_electronicas(req, res){
    const factura_electronicas = await service.getAllFactura_electronicas(req);
    res.status(factura_electronicas.status).send(factura_electronicas.data);
}
// crear factura_electronicas(POST)
async function postFactura_electronicas(req, res) {
    const factura_electronicas = await service.postFactura_electronicas(req);
    res.status(factura_electronicas.status).send(factura_electronicas.data);
    console.log(factura_electronicas.status,"se creo el factura_electronicas aqui")
}
// actualizar factura_electronicas(PUT)
async function putFactura_electronicas(req, res) {
    const params = req.body;
    const id = req.params.id;
    let factura_electronicas = await service.putFactura_electronicas(id, params);
    res.status(factura_electronicas.status).send(factura_electronicas.data);
}

// eliminar factura_electronicas(DELETE)
async function deleteFactura_electronicas(req, res) {
    const params = req.body;
    const nFactura_electronicas = req.params.nFactura_electronicas;
    let resultado = await service.eliminarFactura_electronicas(nFactura_electronicas);
    res.status(resultado.status).send(resultado.data);
}


module.exports = {
    getAllFactura_electronicas,
    postFactura_electronicas,
    putFactura_electronicas,
    deleteFactura_electronicas
};