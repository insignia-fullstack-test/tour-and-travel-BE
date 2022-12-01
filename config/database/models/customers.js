'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Orders, { foreignKey: 'customerId' })
    }
  }
  Customer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    role: {
      type: DataTypes.ENUM(['Admin', 'User']),
      defaultValue: 'User'
    },
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};