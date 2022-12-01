'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TravelPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.OrderDetails, { foreignKey: 'packageId' })
    }
  }
  TravelPackage.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TravelPackage',
  });
  return TravelPackage;
};