control = require("../modelos/acceso.js")
function getPropiedad(req, res) {
	if(req.query.claveCatastral != null) {
		p1 = control.getPropiedad(req.query.claveCatastral);
		res.send(p1);
	}
	else {
		p1 = control.getAllPropiedades();
		res.send(p1);
	}
}
function getArrendatarios(req, res) {
	if(req.query.RFC != null) {
		arrendarios = control.getArrendario(req.query.RFC);
		res.send(arrendarios);
	}
	else {
		arrendarios = control.getAllArrendarios();
		res.send(arrendarios);
	}
}
function getPropietarios(req, res) {
	if(req.query.RFC != null) {
		resPropietarios = control.getPropietario(req.query.RFC);
		res.send(resPropietarios);
	}
	else {
		resPropietarios= control.getAllPropietarios();
		res.send(resPropietarios);
	}
}
function crearPropietario(req, res) {
	let b = req.body;
	if(b.RFC == undefined || b.nombre == undefined || b.esArrendador == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"});
	}
	r = control.crearPropietario(b.RFC, b.nombre, b.esArrendador);
	if(r > 0) return res.status(200).json({"OK": "Sujeto agregado"});
}
function crearPropiedad(req, res) {
	let b = req.body;
	if(b.claveCatastral == undefined || b.descripcion == undefined || b.propietarios == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"});
	}
	r = control.crearPropiedad(b.claveCatastral, b.descripcion, b.propietarios);
	if(r > 0) return res.status(200).json({"OK": "Propiedad agregada"});
}
function putPropiedad(req, res) {
	let b = req.body;
	if(b.claveCatastral == undefined || b.descripcion == undefined || b.propietarios == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"});
	}
	r = control.putPropiedad(b.claveCatastral, b);
	if(r != -1) return res.status(200).json({"OK": "Modificado"});
}
function putPropietario(req, res) {
	let b = req.body;
	if(b.RFC == undefined || b.nombre == undefined || b.esArrendador == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"});
	}
	r = control.putPropietario(b.RFC, b);
	if(r != -1) return res.status(200).json({"OK": "Modificado"});
}
function deletePropiedad(req, res) {
	if(req.query.claveCatastral != null) {
		p1 = control.deletePropiedad(req.query.claveCatastral);
		res.send(p1);
	}
	else {
		p1 = control.getAllPropiedades();
		res.send(p1);
	}
}
function deletePropietario(req, res) {
	if(req.query.RFC != null) {
		resPropietarios = control.deletePropietario(req.query.RFC);
		res.send(resPropietarios);
	}
	else {
		resPropietarios= control.getAllPropietarios();
		res.send(resPropietarios);
	}
}
module.exports.crearPropietario = crearPropietario;
module.exports.crearPropiedad= crearPropiedad;
module.exports.getArrendatarios = getArrendatarios;
module.exports.getPropiedad = getPropiedad;
module.exports.getPropietarios = getPropietarios;
module.exports.putPropiedad = putPropiedad;
module.exports.deletePropiedad = deletePropiedad;
module.exports.putPropietario = putPropietario;
module.exports.deletePropietario = deletePropietario;
