'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {

      Product.belongsToMany(models.Cart, {
        through: 'CartProduct',
        as: 'carts',
        foreignKey: 'product_id'
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};