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
	let estado = await deletePropiedad(claveCatastral);
	if(estado == 0) {
		return -1;
	}
	return await crearPropiedad(propiedad.claveCatastral, propiedad.descripcion, propiedad.propietarios);
	
}
async function patchPropiedad(claveCatastral, propiedad) {
	const prop = await models.Propiedades.findOne({
		where: {
			claveCatastral: claveCatastral,
		}
	});
	if(prop != undefined || prop != null) {
		if(propiedad.propietarios != undefined) await agregarPropietarios(prop, propiedad.propietarios);
		prop.updatedAt = new Date();
		a = await prop.update(propiedad);
		await prop.save();
		return a;
	}
	return -1;
}
async function agregarPropietarios(propiedad, propietarios) {
	creados = await Promise.all(
		propietarios.map(async (propietario) => {
			let consulta = await models.Propietarios.findAll({
				where: {
					RFC: propietario.RFC 
				}
			});
			return await propiedad.addPropietarios(consulta);
		})
	);
	return propiedad.toJSON();
}
async function deletePropiedad(claveCatastral) {
	eliminado = await models.Propiedades.destroy({
		where: {
			claveCatastral: claveCatastral
		}
	})
	return eliminado;
}
async function deletePropietario(RFC) {
	eliminado = await models.Propietarios.destroy({
		where: {
			RFC: RFC 
		}
	})
	return eliminado;
}
async function putPropietario(RFC, propietario) {
	estado = await deletePropietario(RFC);
	if(estado == 0) {
		return -1;
	} 
	return await crearPropietario(propietario.RFC, propietario.nombre, propietario.esArrendatario);
}
async function patchPropietario(RFC, propietario) {
	const prop = await models.Propietarios.findOne({
		where: {
			RFC: RFC,
		}
	});
	if(prop != undefined || prop != null) {
		if(propietario.propiedades != undefined) await agregarPropiedades(prop, propietario.propiedades);
		prop.updatedAt = new Date();
		a = await prop.update(propietario);
		await prop.save();
		return a;
	}
	return -1;

}
async function agregarPropiedades(propietario, propiedades) {
	creados = await Promise.all(
		propiedades.map(async (propiedad) => {
			let consulta = await models.Propiedades.findAll({
				where: {
					claveCatastral: propiedad.claveCatastral 
				}
			});
			return await propietario.addPropiedades(consulta);
		})
	);
	return propietario.toJSON();
}
async function deleteAllPropietarios() {
	eliminado = await models.Propietarios.destroy({
		where: {},
		truncate: {
			cascade: true
		}
	});
	return eliminado;
}
async function deleteAllPropiedades() {
	eliminado = await models.Propiedades.destroy({
		where: {},
		truncate: {
			cascade: true
		}
	});
	return eliminado;
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
module.exports.deleteAllPropiedades = deleteAllPropiedades;
module.exports.deleteAllPropietarios = deleteAllPropietarios; 
