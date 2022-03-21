// Importar las clases con las que se construyen los datos.
const Propietario = require("./Propietario").Propietario;
const Propiedad = require("./Propiedad").Propiedad;
propiedades = [
	{ claveCatastral: "LM-20-102", descripcion: "casa grandota", propietarios: []},
	{ claveCatastral: "XA-03-008", descripcion: "casa chiquita", propietarios: []}
];
propietarios = [];
propietarios.push(new Propietario("J142", "Juan", false));
propietarios.push(new Propietario("FA1G2", "Francisca", true));
propietarios.push(new Propietario("S25G", "Sebastian", true));
function getAllArrendarios() {
	return propietarios.filter(propietarios => propietarios.esArrendador);
}
function getAllPropietarios() {
	return propietarios;
}
function getAllPropiedades() {
	return propiedades;
}
function getPropiedad(claveCatastral) {
	return propiedades.filter(propiedad => propiedad.claveCatastral == claveCatastral);
}
function getArrendario(RFC) {
	return propietarios.filter(propietario => propietario.RFC == RFC && propietario.esArrendador);
}
function getPropietario(RFC) {
	return propietarios.filter(propietario => propietario.RFC == RFC);
}
function crearPropietario(RFC, nombre, esArrendario) {
	return propietarios.push(new Propietario(RFC, nombre, esArrendario))
}
function crearPropiedad(claveCatastral, descripcion, propietarios) {
	return propiedades.push(new Propiedad(claveCatastral, descripcion, propietarios));
}
function putPropiedad(claveCatastral, propiedad) {
	let og = propiedades.length;
	propiedades = propiedades.filter((propiedad) => propiedad.claveCatastral != claveCatastral);
	if(og == propiedades.length) {
		return -1;
	}
	propiedades.push(propiedad);
	return 0;
}
function patchPropiedad(claveCatastral, propiedad) {

}
function deletePropiedad(claveCatastral) {
	eliminado = propiedades.filter(propiedad => propiedad.claveCatastral == claveCatastral);
	propiedades = propiedades.filter((propiedad) => propiedad.claveCatastral != claveCatastral);
	return eliminado;
}
function deletePropietario(RFC) {
	eliminado = propietarios.filter(propietario => propietario.RFC == RFC);
	propietarios = propietarios.filter(propietario => propietario.RFC != RFC);
	return eliminado;
}
function putPropietario(RFC, propietario) {
	let og = propietarios.length;
	propietarios = propietarios.filter((propietario) => propietario.RFC != RFC);
	if(og == propietarios.length) {
		return -1;
	}
	propietarios.push(propietario);
	return 0;
}
function patchPropietario(RFC, propietario) {

}
module.exports.getAllArrendarios = getAllArrendarios;
module.exports.getAllPropietarios = getAllPropietarios;
module.exports.getAllPropiedades = getAllPropiedades;
module.exports.getPropiedad = getPropiedad;
module.exports.getArrendario = getArrendario;
module.exports.getPropietario = getPropietario;
module.exports.crearPropietario = crearPropietario;
module.exports.putPropiedad = putPropiedad; 
module.exports.crearPropiedad = crearPropiedad; 
module.exports.patchPropiedad = patchPropiedad; 
module.exports.deletePropiedad = deletePropiedad; 
module.exports.deletePropietario = deletePropietario; 
module.exports.putPropietario = putPropietario; 
module.exports.patchPropietario = patchPropietario; 
