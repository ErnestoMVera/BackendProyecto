'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Propietarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
	onDelete: "cascade"
      },
      RFC: {
        type: Sequelize.STRING,
	onDelete: "cascade"
      },
      nombre: {
        type: Sequelize.STRING,
	onDelete: "cascade"
      },
      esArrendatario: {
        type: Sequelize.BOOLEAN,
	onDelete: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
	onDelete: "cascade"
      },
      updatedAt: {
        allowNull: false,
	onDelete: "cascade",
        type: Sequelize.DATE
      },
      url: {
	type: Sequelize.STRING,
	onDelete: "cascade"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Propietarios');
  }
};
