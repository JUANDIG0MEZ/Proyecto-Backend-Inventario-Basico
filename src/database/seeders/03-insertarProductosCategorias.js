const {cargarCategorias} = require('../datosFaker')
'use strict';
const {ProductoCategoria} = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categorias = cargarCategorias()
    const transaction = await queryInterface.sequelize.transaction()
    await ProductoCategoria.bulkCreate(categorias, {
      individualHooks: true ,
      validate: true,
      transaction
    })
    await transaction.commit()
    //await queryInterface.bulkInsert('productos_categorias', categorias, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos_categorias', null, {})
  }
};
