'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.TravelPackages, { foreignKey: 'packageId' })
      this.belongsTo(models.Orders, { foreignKey: 'orderId' })
    }
  }
  OrderDetail.init({
    packageId: DataTypes.STRING,
    orderId: DataTypes.STRING,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};