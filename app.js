'use strict'

const express = require('express');
const bodyParser = require('body-parser');

// agregar archivos para las tareas programadas
var app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());

// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Request-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
});


if (app.get('env') === 'development') {
    console.log('Rejecting node tls');
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

// Cotizaciones y Pedidos
var abastecimientos = require('./abastecimientos/routes/abastecimientos_routes');
var ajustes = require('./ajustes/routes/ajustes_routes');
var bidons = require('./bidons/routes/bidons_routes');
var bodegueros = require('./bodegueros/routes/bodegueros_routes');
var carga_inicials = require('./carga_inicials/routes/carga_inicials_routes');
var centros = require('./centros/routes/centros_routes');
var centro_nota_credito_tributaria = require('./centro_nota_credito_tributaria/routes/centro_nota_credito_tributaria_routes');
var centro_orden_compra = require('./centro_orden_compra/routes/centro_orden_compra_routes');
var cierres = require('./cierres/routes/cierres_routes');
var compass_roles = require('./compass_rules/routes/compass_rules_routes');
var empresas = require('./empresas/routes/empresas_routes');
var entradas = require('./entradas/routes/entradas_routes');
var estados = require('./estados/routes/estados_routes');
var factura_electronicas = require('./factura_electronicas/routes/factura_electronicas_routes');
var factura_electronica_orden_compra = require('./factura_electronica_orden_compra/routes/factura_electronica_orden_compra_routes');
var failed_jobs = require('./failed_jobs/routes/failed_jobs_routes');
var folios = require('./folios/routes/folios_routes');
var guia_despachos = require('./guia_despachos/routes/guia_despachos_routes');
var guia_despacho_producto = require('./guia_despacho_producto/routes/guia_despacho_producto_routes');
var historials = require('./historials/routes/historials_routes');
var historial_estados = require('./historial_estados/routes/historial_estados_routes');
var holdings = require('./holdings/routes/holdings_routes');
var horarios = require('./horarios/routes/horarios_routes');
var jobs = require('./jobs/routes/jobs_routes');
var migrations = require('./migrations/routes/migrations_routes');
var nota_creditos = require('./nota_creditos/routes/nota_creditos_routes');
var nota_credito_tributarias = require('./nota_credito_tributarias/routes/nota_credito_tributarias_routes');
var notificacion_estados = require('./notificacion_estados/routes/notificacion_estados_routes');
var notifications = require('./notifications/routes/notifications_routes');
var orden_compras = require('./orden_compras/routes/orden_compras_routes');
var password_resets = require('./password_resets/routes/password_resets_routes');
var presupuestos = require('./presupuestos/routes/presupuestos_routes');
var productos = require('./productos/routes/productos_routes');
var producto_requerimiento = require('./producto_requerimiento/routes/producto_requerimiento_routes');
var programacion_precios = require('./programacion_precios/routes/programacion_precios_routes');
var proveedors = require('./proveedors/routes/proveedors_routes');
var rechazos = require('./rechazos/routes/rechazos_routes');
var requerimientos = require('./requerimientos/routes/requerimientos_routes');
var requerimiento_user = require('./requerimiento_user/routes/requerimiento_user_routes');
var salidas = require('./salidas/routes/salidas_routes');
var tipo_observacions = require('./tipo_observacions/routes/tipo_observacions_routes');
var transportes = require('./transportes/routes/transportes_routes');
var users = require('./users/routes/users_routes');
var usuario = require('./usuario/routes/usuarioRoutes');
var totales = require('./totales/routes/totales');
var check = require('./usuario/routes/preguntas');
var login = require('./usuario/routes/login');
var proyectos = require('./proyectos/routes/proyectos');
var profesiones = require('./profesiones/routes/profesiones');
var categorias = require('./profesiones/routes/categorias');
var voluntarios = require('./voluntarios/routes/voluntarios');
var socios= require('./socios/routes/socios');
var sector= require('./proyectos/routes/sector');
var excel = require('./excel/routes/excel');
var convocatoria = require('./convocatorias/routes/convocatoria');
var equipos = require('./equipos/routes/equipos');
var litros = require('./ventaLitros/routes/litros');
var cliente = require('./cliente/routes/clientesRoutes');
// rutas
//app.use("/api/usuarios", usuarioRoutes/);
app.use('/api', abastecimientos);
app.use('/api', ajustes);
app.use('/api', bidons);
app.use('/api', bodegueros);
app.use('/api', carga_inicials);
app.use('/api', centros);
app.use('/api', centro_nota_credito_tributaria);
app.use('/api', centro_orden_compra);
app.use('/api', cierres);
app.use('/api', compass_roles);
app.use('/api', empresas);
app.use('/api', entradas);
app.use('/api', estados);
app.use('/api', factura_electronicas);
app.use('/api', factura_electronica_orden_compra);
app.use('/api', failed_jobs);
app.use('/api', folios);
app.use('/api', guia_despachos);
app.use('/api', guia_despacho_producto);
app.use('/api', historials);
app.use('/api', historial_estados);
app.use('/api', holdings);
app.use('/api', horarios);
app.use('/api', jobs);
app.use('/api', migrations);
app.use('/api', nota_creditos);
app.use('/api', nota_credito_tributarias);
app.use('/api', notificacion_estados);
app.use('/api', notifications);
app.use('/api', orden_compras);
app.use('/api', password_resets);
app.use('/api', presupuestos);
app.use('/api', productos);
app.use('/api', producto_requerimiento);
app.use('/api', programacion_precios);
app.use('/api', proveedors);
app.use('/api', rechazos);
app.use('/api', requerimientos);
app.use('/api', requerimiento_user);
app.use('/api', salidas);
app.use('/api', tipo_observacions);
app.use('/api', transportes);
app.use('/api', users);
app.use('/api', usuario);
app.use('/api', totales);
app.use('/api', check);
app.use('/api', login);
app.use('/api', proyectos);
app.use('/api', profesiones);
app.use('/api', categorias);
app.use('/api',voluntarios);
app.use('/api', excel);
app.use('/api', socios);
app.use('/api', sector);
app.use('/api', convocatoria);
app.use('/api', equipos);
app.use('/api', litros);
app.use('/api', cliente);
module.exports = app;
