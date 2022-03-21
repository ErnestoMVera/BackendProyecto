class Propietario {
	constructor(RFC, nombre, esArrendador) {
		this.RFC = RFC;
		this.nombre = nombre;
		this.esArrendador = esArrendador;
		this.url = process.env.HOSTNAME || 'localhost:3000' + "/propietarios?RFC="+RFC;
	}
}
module.exports.Propietario = Propietario;
