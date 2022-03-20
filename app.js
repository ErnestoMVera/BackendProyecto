const express = require("express");
const bodyParser = require("body-parser");
const control = require("./controladores/controlador");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.get('/', (req, res) => {	
	res.send("BIENVENIDO A MI BAKEN");
});
app.get('/propiedades', (req, res) => control.getPropiedad(req, res));
app.get('/arrendarios', (req, res) => control.getArrendatarios(req, res));
app.get('/propietarios', (req, res) => control.getPropietarios(req, res));
app.post('/', (req, res) => {
	res.send(req.body);
});
app.post('/propietarios', (req, res) => control.crearPropietario(req, res));
app.post('/propiedades', (req, res) => control.crearPropiedad(req, res));
app.listen(port, () => {
	console.log("Servidor iniciado");
});
