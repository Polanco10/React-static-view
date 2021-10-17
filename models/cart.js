'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsToMany(models.Product, {
        through: 'CartProduct',
        as: 'products',
        foreignKey: 'cart_id'
      });
    }
  };
  Cart.init({
    name: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};