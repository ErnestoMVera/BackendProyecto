'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dueniosPropiedades extends Model {
    static associate(models) {
      // define association here
    }
  }
  dueniosPropiedades.init({
    propietarioId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    propiedadId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'dueniosPropiedades',
  });
  return dueniosPropiedades;
};
