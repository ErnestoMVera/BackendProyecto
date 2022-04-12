// Importar las clases con las que se construyen los datos.
const models = require('../models');
const Propietario = require("./Propietario").Propietario;
const Propiedad = require("./Propiedad").Propiedad;
const {host} = require('../config')
raw = {raw:true} // JSON que hace que me regrese el objeto JSON solo de los datos
async function getAllArrendatarios() {
	let consulta =  await models.Propietarios.findAll({
		where: {
			esArrendatario: 1
		}
	});
	consulta = await Promise.all(
		consulta.map(async (propietario) => {
			let propiedades = await propietario.getPropiedades(raw);
			propiedades = propiedades.map((p) => p.url);
			propietario.dataValues['Propiedades'] = propiedades;
			return propietario;
		})
	);
	return consulta;
}
async function getAllPropietarios() {
	let consulta = await models.Propietarios.findAll();
	consulta = await Promise.all(
		consulta.map(async (propietario) => {
			let propiedades = await propietario.getPropiedades(raw);
			propiedades = propiedades.map((p) => p.url);
			propietario.dataValues['Propiedades'] = propiedades;
			return propietario;
		})
	);
	return consulta;
}
async function getAllPropiedades() {
	let propiedades = await models.Propiedades.findAll();
	propiedades = await Promise.all(
		propiedades.map(async (propiedad) => {
			let propietarios = await propiedad.getPropietarios(raw);
			propietarios = propietarios.map((p) => p.url);
			propiedad.dataValues['Propietarios'] = propietarios;
			return propiedad;
		})
	);
	return propiedades;
}
async function getPropiedad(claveCatastral) {
	let consulta =  await models.Propiedades.findAll({
		where: {
			claveCatastral: claveCatastral
		}
	});
	consulta = await Promise.all(
		consulta.map(async (propiedad) => {
			let propietarios = await propiedad.getPropietarios(raw);
			propietarios = propietarios.map((p) => p.url);
			propiedad.dataValues['Propietarios'] = propietarios;
			return propiedad;
		})
	);
	return consulta;
}
async function getArrendatario(RFC) {
	let consulta =  await models.Propietarios.findAll({
		where: {
			esArrendatario: 1,
			RFC: RFC
		}
	});
	consulta = await Promise.all(
		consulta.map(async (propietario) => {
			let propiedades = await propietario.getPropiedades(raw);
			propiedades = propiedades.map((p) => p.url);
			propietario.dataValues['Propiedades'] = propiedades;
			return propietario;
		})
	);
	return consulta;
}
async function getPropietario(RFC) {
	let consulta =  await models.Propietarios.findAll({
		where: {
			RFC: RFC 
		}
	});
	consulta = await Promise.all(
		consulta.map(async (propietario) => {
			let propiedades = await propietario.getPropiedades(raw);
			propiedades = propiedades.map((p) => p.url);
			propietario.dataValues['Propiedades'] = propiedades;
			return propietario;
		})
	);
	return consulta;
}
async function crearPropietario(RFC, nombre, esArrendatario) {
	let creado = await models.Propietarios.create({
		RFC: RFC,
		nombre: nombre,
		esArrendatario: esArrendatario,
		createdAt: new Date(),
		updatedAt: new Date(),
		url: host + "propietarios/" + RFC
	});
	return creado.toJSON();
}
async function crearPropiedad(claveCatastral, descripcion, propietarios) {
	let creado = await models.Propiedades.create({
		claveCatastral: claveCatastral,
		descripcion: descripcion,
		createdAt: new Date(),
		updatedAt: new Date(),
		url: host + "propiedades/" + claveCatastral
	});
	if(propietarios.length > 0) {
		creados = await Promise.all(
			propietarios.map(async (propietario) => {
				let consulta = await models.Propietarios.findAll({
					where: {
						RFC: propietario.RFC 
					}
				});
				return await creado.addPropietarios(consulta);
			})
		);
	}
	return creado.toJSON();
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
