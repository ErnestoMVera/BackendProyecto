class Propiedad {
	constructor(claveCatastral, descripcion, propietarios) {
		this.claveCatastral = claveCatastral;
		this.descripcion = descripcion;
		this.propietarios = propietarios;
	}
}
class Propietario {
	constructor(RFC, nombre, esArrendador) {
		this.RFC = RFC;
		this.nombre = nombre;
		this.esArrendador = esArrendador;
	}
}
module.exports = {
	Propiedad: Propiedad,
	Propietario: Propietario
}
