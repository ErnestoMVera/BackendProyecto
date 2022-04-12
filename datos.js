const models = require('./models');
const { host } = require("./config")
async function inicia() {
	const persona = await models.Propietarios.create({
		nombre: "John Doe",
		RFC: "RFC1",
		esArrendatario: false,
		createdAt: new Date(),
		updatedAt: new Date(),
		url: host+"propietarios/" + "RFC1" 
	});
	const propiedad = await models.Propiedades.create({
		claveCatastral: "clave12131",
		descripcion: "desc1",
		createdAt: new Date(),
		updatedAt: new Date(),
		url: host+"propiedades/" + "clave12131" 
	});
	await persona.addPropiedades(propiedad);
	const props = await persona.getPropiedades();
	console.log(`Propiedades de: ${persona.nombre}`);
	props.forEach(async (p) => {
		console.log(p.claveCatastral)
	});
}
inicia();
