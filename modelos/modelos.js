class Propiedad {
	constructor(claveCatastral, descripcion, propietarios) {
		this.claveCatastral = claveCatastral;
		this.descripcion = descripcion;
		this.propietarios = propietarios;
		this.url = process.env.HOSTNAME + "/propiedades?claveCatastral="+claveCatastral
	}
}
class Propietario {
	constructor(RFC, nombre, esArrendador) {
		this.RFC = RFC;
		this.nombre = nombre;
		this.esArrendador = esArrendador;
		this.url = process.env.HOSTNAME || 'localhost:3000' + "/propietarios?RFC="+RFC;
	}
}
module.exports = {
	Propiedad: Propiedad,
	Propietario: Propietario
}
