// Importar los modelos de los datos persisntes.
propiedades = require("../modelos/data")
// Importar las clases con las que se construyen los datos.
Propiedades = require("./propiedad")
// Terminar de importar las clases.
Propiedad = Propiedades.Propiedad;
Propietario = Propiedades.Propietario;
propiedades = propiedades.datos;
propietarios = [];
propietarios.push(new Propietario("J142", "Juan", false))
propietarios.push(new Propietario("fa1g2", "Francisca", true))
propietarios.push(new Propietario("S25G", "Sebastian", true))
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
	return propiedades.push(new Propiedad(claveCatastral, descripcion, propietarios))
}
module.exports.getAllArrendarios = getAllArrendarios;
module.exports.getAllPropietarios = getAllPropietarios;
module.exports.getAllPropiedades = getAllPropiedades;
module.exports.getPropiedad = getPropiedad;
module.exports.getArrendario = getArrendario;
module.exports.getPropietario = getPropietario;
module.exports.crearPropietario = crearPropietario;
module.exports.crearPropiedad = crearPropiedad; 
