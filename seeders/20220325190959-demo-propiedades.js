const {host} = require('../config.js');
'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Propiedades', [
    {
	claveCatastral: "LM-20-102",
	descripcion: "casa grandota",
	createdAt: new Date(),
	updatedAt: new Date(),
	url: host + "propiedades/"+"LM-20-102"
    },
    {
	claveCatastral: "XA-03-008",
	descripcion: "casa chiquita",
	createdAt: new Date(),
	updatedAt: new Date(),
	url: host + "propiedades/"+"XA-03-008"
    }
    ], {});
  },
  async down (queryInterface, Sequelize) {
	await queryInterface.bulkDelete('Propiedades', null, {});
  }
};
