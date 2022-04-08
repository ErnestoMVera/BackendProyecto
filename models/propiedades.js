'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propiedades extends Model {
    static associate(models) {
      this.belongsToMany(models.Propietarios, { 
        as: {
          plural: "propietarios",
          singular: "propietario"
        },
        through: models.dueniosPropiedades,
	foreignKey: "propiedadId"
      });
    }
  }
  Propiedades.init({
    claveCatastral: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "casa"
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Propiedades',
  });
  return Propiedades;
};
