control = require("../modelos/acceso.js")
async function getPropiedad(req, res) {
	if(req.params.claveCatastral != undefined) {
		p1 = await control.getPropiedad(req.params.claveCatastral);
		res.send(p1);
		return;
	}
	p1 = await control.getAllPropiedades();
	res.send(p1);
}
async function getArrendatarios(req, res) {
	if(req.params.RFC != undefined) {
		let arrendatarios = await control.getArrendatario(req.params.RFC);
		res.send(arrendatarios);
		return;
	}
	let arrendatarios = await control.getAllArrendatarios();
	res.send(arrendatarios);
}
async function getPropietarios(req, res) {
	if(req.params.RFC != undefined) {
		resPropietarios = await control.getPropietario(req.params.RFC);
		res.send(resPropietarios);
		return;
	}
	resPropietarios = await control.getAllPropietarios();
	res.send(resPropietarios);
}
async function crearPropietario(req, res) {
	let b = req.body;
	if(b.RFC == undefined || b.nombre == undefined || b.esArrendatario == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"});
	}
	r = await control.crearPropietario(b.RFC, b.nombre, b.esArrendatario);
	if(r != null) return res.status(200).json(r);
}
async function crearPropiedad(req, res) {
	let b = req.body;
	if(b.claveCatastral == undefined || b.descripcion == undefined || b.propietarios == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"});
	}
	r = await control.crearPropiedad(b.claveCatastral, b.descripcion, b.propietarios);
	if(r != null) return res.status(200).json(r);
}
async function putPropiedad(req, res) {
	let b = req.body;
	if(b.claveCatastral == undefined || b.descripcion == undefined || b.propietarios == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"});
	}
	r = await control.putPropiedad(req.params.claveCatastral, b);
	if(r != -1) return res.status(200).json({"OK": "Modificado"});
	else return res.status(400).json({"Error" : "Algo feo ocurrio"});
}
async function putPropietario(req, res) {
	let b = req.body;
	if(b.RFC == undefined || b.nombre == undefined || b.esArrendatario == undefined) {
		return res.status(400).json({"Error" : "No existen esos atributos"});
	}
	r = await control.putPropietario(req.params.RFC, b);
	if(r != -1) return res.status(200).json({"OK": "Modificado"});
	else return res.status(400).json({"Error" : "Algo feo ocurrio"});
}
async function deletePropiedad(req, res) {
	if(req.params.claveCatastral != null) {
		p1 = await control.deletePropiedad(req.params.claveCatastral);
		if(p1 == 1) res.status(200).json({"OK": "Eliminado"});
		else res.status(201).json({"Error":"no pudo ser eliminado"})
	}
	else {
		p1 = await control.deleteAllPropiedades();
		console.log(p1);
		if(p1 > 0) res.status(200).json({"OK": "Eliminado"});
		else res.status(201).json({"Error":"no pudo ser eliminado"})
	}
}
async function deletePropietario(req, res) {
	if(req.params.RFC != null) {
		resPropietarios = await control.deletePropietario(req.params.RFC);
		if(resPropietarios == 1) res.status(200).json({"OK": "Eliminado"});
		else res.status(201).json({"Error":"no pudo ser eliminado"})
	}
	else {
		resPropietarios = await control.deleteAllPropietarios();
		if(resPropietarios > 0) res.status(200).json({"OK": "Eliminado"});
		else res.status(201).json({"Error":"no pudo ser eliminado"})
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
