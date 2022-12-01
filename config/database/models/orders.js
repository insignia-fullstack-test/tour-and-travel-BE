'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.OrderDetails, { foreignKey: 'orderId' })
      this.belongsTo(models.Customers, { foreignKey: 'customerId' })
    }
  }
  Order.init({
    orderNumber: DataTypes.STRING,
    customerId: DataTypes.STRING,
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};