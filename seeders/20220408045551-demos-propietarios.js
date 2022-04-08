'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Propietarios', [
     {
	RFC: "J142",
	nombre: "Juan",
	esArrendatario: false,
	createdAt: new Date(),
	updatedAt: new Date()	
     },
     {
	RFC: "FA1G2",
	nombre: "Francisca",
	esArrendatario: true,
	createdAt: new Date(),
	updatedAt: new Date()
     },
     {
	RFC: "S25G",
	nombre: "Sebastian",
	esArrendatario: true,
	createdAt: new Date(),
	updatedAt: new Date()
     }
     ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Propietarios', null, {});
  }
};
