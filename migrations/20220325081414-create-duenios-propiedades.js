'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dueniosPropiedades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      propietarioId: {
        type: Sequelize.INTEGER,
	allowNull: false,
        references: {
          model: "Propietarios",
	  key:"id"
        },
	onDelete: "cascade"
      },
      propiedadId: {
        type: Sequelize.INTEGER,
	allowNull: false,
        references: {
  	  model: "Propiedades",
          key: "id"
        },
	onDelete: "cascade"
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dueniosPropiedades');
  }
};
