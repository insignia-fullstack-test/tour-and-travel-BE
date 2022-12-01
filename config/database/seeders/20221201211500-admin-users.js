'use strict';

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Imam',
        email: 'imam.hermawan@gmail.com',
        password: bcrypt.hashSync('secret', 10),
        role: 'admin'
      },
      {
        firstName: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('secret', 10),
        role: 'admin'
      },
      {
        name: 'tour admin',
        email: 'tour_admin@gmail.com',
        password: bcrypt.hashSync('secret', 10),
        role: 'admin'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    
     await queryInterface.bulkDelete('Customers', null, {});
  }
};
