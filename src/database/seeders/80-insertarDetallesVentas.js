const { cargarDetallesVenta } = require('../datosFaker')
const { DetalleVenta } = require('../models')

'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    const detallesVentas = cargarDetallesVenta()

    console.log('Detalles de Ventas', detallesVentas.slice(0, 1))

    for (let i = 0; i < detallesVentas.length; i++) {
      await DetalleVenta.create(detallesVentas[i], {
        individualHooks: true,
        validate: true,
        transaction
      })
    }

    await transaction.commit()
  }

}
