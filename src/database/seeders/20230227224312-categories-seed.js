'use strict';

import { QueryInterface } from 'sequelize';
import faker from 'faker';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const products = [];
    for (let i = 0; i < 10; i++) {
      products.push({
        name: faker.commerce.productName(),
        code: faker.commerce.price(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('products', products, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
