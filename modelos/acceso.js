// Importar las clases con las que se construyen los datos.
clases = require("./modelos");
const propiedades = [
	{ claveCatastral: "LM-20-102", descripcion: "casa grandota", propietarios: []},
	{ claveCatastral: "XA-03-008", descripcion: "casa chiquita", propietarios: []}
];
// Terminar de importar las clases.
Propietario = clases.Propietario;
Propiedad = clases.Propiedad;
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
	return propietarios.filter(propietario => propietario.rfc == rfc);
}
function crearPropietario(RFC, nombre, esArrendario) {
	return propietarios.push(new Propietario(RFC, nombre, esArrendario))
}
function crearPropiedad(claveCatastral, descripcion, propietarios) {
	return propiedades.push(new Propiedad(claveCatastral, descripcion, propietarios));
}
function putPropiedad(claveCatastral, propiedad) {
	
}
function patchPropiedad(claveCatastral, propiedad) {

}
function deletePropiedad(claveCatastral) {

}
function deletePropietario(RFC) {

}
function putPropietario(RFC, propietario) {
	
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
