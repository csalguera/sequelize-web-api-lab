'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const date = new Date()

    await queryInterface.bulkInsert('Artists', [{
      name: 'Taylor Swift',
      age: 33,
      hometown: 'West Reading',
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Artists', null, {})
  }
};
