const {host} = require('../config.js');
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Propietarios', [
     {
	RFC: "J142",
	nombre: "Juan",
	esArrendatario: false,
	createdAt: new Date(),
	updatedAt: new Date(),
	url: host + "propietarios/J142"
     },
     {
	RFC: "FA1G2",
	nombre: "Francisca",
	esArrendatario: true,
	createdAt: new Date(),
	updatedAt: new Date(),
	url: host + "propietarios/" + "FA1G2"
     },
     {
	RFC: "S25G",
	nombre: "Sebastian",
	esArrendatario: true,
	createdAt: new Date(),
	updatedAt: new Date(),
	url: host + "propietarios/S25G"
     }
     ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Propietarios', null, {});
  }
};
