const models = require('./models');

async function inicia() {
	const persona = await models.Propietarios.create({
		nombre: "John Doe",
		RFC: "RFC1",
		esArrendatario: false,
		createdAt: new Date(),
		updatedAt: new Date()
	});
	const propiedad = await models.Propiedades.create({
		claveCatastral: "clave12131",
		descripcion: "desc1",
		createdAt: new Date(),
		updatedAt: new Date()
	});
	await persona.addPropiedades(propiedad);
	const props = await persona.getPropiedades();
	console.log(`Propiedades de: ${persona.nombre}`);
	props.forEach(p => {
		console.log(p.claveCatastral)
	});
}
inicia();
