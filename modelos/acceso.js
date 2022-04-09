// Importar las clases con las que se construyen los datos.
const models = require('../models');
const Propietario = require("./Propietario").Propietario;
const Propiedad = require("./Propiedad").Propiedad;
raw = {raw:true} // JSON que hace que me regrese el objeto JSON solo de los datos
async function getAllArrendatarios() {
	let consulta = await models.Propietarios.findAll(raw);
	console.log(consulta);
	return consulta;//consulta.filter(propietarios => propietarios.esArrendador);
}
async function getAllPropietarios() {
	let consulta = await models.Propietarios.findAll(raw);
	console.log(consulta);
	return consulta;
}
async function getAllPropiedades() {
	return await models.Propiedades.findAll();
}
async function getPropiedad(claveCatastral) {
	let consulta =  await models.Propiedades.findAll({
		raw: true,
		where: {
			claveCatastral: claveCatastral
		}
	});
	return consulta;
	//return propiedades.filter(propiedad => propiedad.claveCatastral == claveCatastral);
}
async function getArrendatario(RFC) {
	return propietarios.filter(propietario => propietario.RFC == RFC && propietario.esArrendador);
}
async function getPropietario(RFC) {
	return propietarios.filter(propietario => propietario.RFC == RFC);
}
async function crearPropietario(RFC, nombre, esArrendario) {
	return propietarios.push(new Propietario(RFC, nombre, esArrendario))
}
async function crearPropiedad(claveCatastral, descripcion, propietarios) {
	return propiedades.push(new Propiedad(claveCatastral, descripcion, propietarios));
}
async function putPropiedad(claveCatastral, propiedad) {
	let og = propiedades.length;
	propiedades = propiedades.filter((propiedad) => propiedad.claveCatastral != claveCatastral);
	if(og == propiedades.length) {
		return -1;
	}
	propiedades.push(propiedad);
	return 0;
}
async function patchPropiedad(claveCatastral, propiedad) {

}
async function deletePropiedad(claveCatastral) {
	eliminado = propiedades.filter(propiedad => propiedad.claveCatastral == claveCatastral);
	propiedades = propiedades.filter((propiedad) => propiedad.claveCatastral != claveCatastral);
	return eliminado;
}
async function deletePropietario(RFC) {
	eliminado = propietarios.filter(propietario => propietario.RFC == RFC);
	propietarios = propietarios.filter(propietario => propietario.RFC != RFC);
	return eliminado;
}
async function putPropietario(RFC, propietario) {
	let og = propietarios.length;
	propietarios = propietarios.filter((propietario) => propietario.RFC != RFC);
	if(og == propietarios.length) {
		return -1;
	}
	propietarios.push(propietario);
	return 0;
}
async function patchPropietario(RFC, propietario) {

}
module.exports.getAllArrendatarios = getAllArrendatarios;
module.exports.getAllPropietarios = getAllPropietarios;
module.exports.getAllPropiedades = getAllPropiedades;
module.exports.getPropiedad = getPropiedad;
module.exports.getArrendatario = getArrendatario;
module.exports.getPropietario = getPropietario;
module.exports.crearPropietario = crearPropietario;
module.exports.putPropiedad = putPropiedad; 
module.exports.crearPropiedad = crearPropiedad; 
module.exports.patchPropiedad = patchPropiedad; 
module.exports.deletePropiedad = deletePropiedad; 
module.exports.deletePropietario = deletePropietario; 
module.exports.putPropietario = putPropietario; 
module.exports.patchPropietario = patchPropietario; 
