class Propiedad {
	constructor(claveCatastral, descripcion, propietarios) {
		this.claveCatastral = claveCatastral;
		this.descripcion = descripcion;
		this.propietarios = propietarios;
		this.url = process.env.HOSTNAME + "/propiedades?claveCatastral="+claveCatastral
	}
}
module.exports.Propiedad = Propiedad;
