'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos_marcas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productos_marcas');
  }
};