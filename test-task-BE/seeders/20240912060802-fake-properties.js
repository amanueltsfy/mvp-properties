"use strict";

const { faker } = require("@faker-js/faker");
const { v4: uuid } = require("uuid");

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const generateUniquePropertyID = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const properties = [];

    for (let i = 0; i < 100; i++) {
      properties.push({
        id: uuid(),
        location: faker.location.city(),
        price: faker.finance.amount(100000, 500000, 0),
        bedrooms: getRandomInt(1, 5),
        bathrooms: getRandomInt(1, 3),
        size: getRandomInt(500, 3000),
        type: getRandomElement([
          "Apartment",
          "House",
          "Semi-detached house",
          "Commercial real estate",
          "Miscellaneous"
        ]),
        order: getRandomElement(["Buy", "Rent"]),
        views: getRandomInt(10, 500),
        propertyID: generateUniquePropertyID(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert("Properties", properties, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Properties", null, {});
  }
};
