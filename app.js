const express = require("express");
const bodyParser = require("body-parser");
const control = require("./controladores/controlador");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.get('/', (req, res) => {	
	res.send("BIENVENIDO A MI BAKEN");	
});
app.get('/propiedades', (req, res) => {
	if(req.query.claveCatastral != null) {
		p1 = control.getPropiedad(req.query.claveCatastral);
		res.send(p1);
	}
	else {
		p1 = control.getAllPropiedades();
		res.send(p1);
	}
});
app.get('/arrendarios', (req, res) => {	
	if(req.query.RFC != null) {
		console.log(req.query.RFC)
		arrendarios = control.getArrendario(req.query.RFC);
		res.send(arrendarios);
	}
	else {
		arrendarios = control.getAllArrendarios();
		res.send(arrendarios);
	}
});
app.get('/propietarios', (req, res) => {	
	if(req.query.RFC != null) {
		resPropietarios = control.getPropietario(req.query.RFC);
		res.send(resPropietarios);
	}
	else {
		resPropietarios= control.getAllPropietarios();
		res.send(resPropietarios);
	}
});
app.post('/', (req, res) => {
	res.send(req.body);
});
app.post('/propietarios', (req, res) => {
	let b = req.body;
	if(b.RFC == undefined || b.nombre == undefined || b.esArrendador == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"})
	}
	r = control.crearPropietario(b.RFC, b.nombre, b.esArrendador);
	if(r > 0) return res.status(200).json({"OK": "Sujeto agregado"})
});
app.post('/propiedades', (req, res) => {
	let b = req.body;
	if(b.claveCatastral == undefined || b.descripcion == undefined || b.propietarios == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"})
	}
	r = control.crearPropiedad(b.claveCatastral, b.descripcion, b.propietarios);
	if(r > 0) return res.status(200).json({"OK": "Propiedad agregada"})
});
app.listen(port, () => {
	console.log("Servidor iniciado");
});
