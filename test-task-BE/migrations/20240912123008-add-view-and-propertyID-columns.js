"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Properties", "views");
    await queryInterface.removeColumn("Properties", "propertyID");
    await queryInterface.addColumn("Properties", "views", {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    });

    await queryInterface.addColumn("Properties", "propertyID", {
      type: Sequelize.STRING(5),
      allowNull: false,
      unique: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Properties", "views");
    await queryInterface.removeColumn("Properties", "propertyID");
  }
};
