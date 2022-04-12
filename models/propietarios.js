'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propietarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Propiedades, {
        as: {
          plural: "propiedades",
	  singular: "propiedad"
        },
        through: models.dueniosPropiedades,
	foreignKey: "propietarioId"
      });
    }
  }
  Propietarios.init({
    RFC: DataTypes.STRING,
    nombre: DataTypes.STRING,
    esArrendatario: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Propietarios',
  });
  return Propietarios;
};
