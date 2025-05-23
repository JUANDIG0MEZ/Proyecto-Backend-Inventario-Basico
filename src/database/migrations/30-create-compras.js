'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      hora: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: 'clientes',
          key: "id"
        }
      },
      pagado: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      total: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      estado_pago: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      por_pagar: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      estado_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: 'compras_estados',
          key: "id"
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('compras');
  }
};