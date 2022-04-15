'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Propiedades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
	onDelete: "cascade"
      },
      claveCatastral: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
	onDelete: "cascade"
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull:false,
        defaultValue: 0,
	onDelete: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
	onDelete: "cascade"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
	onDelete: "cascade"
      },
      url: {
	type: Sequelize.STRING,
	onDelete: "cascade"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Propiedades');
  }
};
