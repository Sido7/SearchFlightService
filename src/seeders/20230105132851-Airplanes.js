'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {
      modelNumber: "Boeing 777",
      capacity: 325,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: "Antonov An-24/26",
      capacity: 176,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: "Airbus A330",
      capacity: 375,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: " Airbus A320 Family",
      capacity: 225,
      createdAt: new Date(),
      updatedAt: new Date()
    }

   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
