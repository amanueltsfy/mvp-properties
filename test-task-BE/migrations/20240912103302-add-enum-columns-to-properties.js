"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Properties", "type", {
      type: Sequelize.ENUM,
      values: [
        "Apartment",
        "House",
        "Semi-detached house",
        "Commercial real estate",
        "Miscellaneous"
      ],
      allowNull: false,
      defaultValue: "House"
    });

    await queryInterface.addColumn("Properties", "order", {
      type: Sequelize.ENUM,
      values: ["buy", "rent"],
      allowNull: false,
      defaultValue: "buy"
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Properties", "type");
    await queryInterface.removeColumn("Properties", "order");

    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Properties_type";'
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Properties_order";'
    );
  }
};
