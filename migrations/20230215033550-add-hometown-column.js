'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Artists', 'hometown', { type: Sequelize.STRING })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Artists', 'hometown')
  }
};
