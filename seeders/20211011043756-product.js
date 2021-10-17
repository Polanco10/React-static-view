'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'Product1',
      price: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Product2',
      price: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Product3',
      price: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Product4',
      price: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Product5',
      price: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Product6',
      price: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});

  }
};
