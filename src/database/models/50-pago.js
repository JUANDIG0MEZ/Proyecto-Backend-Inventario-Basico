'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pago.belongsTo(models.Cliente, {
        foreignKey: 'cliente_id',
        as: 'clientePago'
      })
    }
  }
  Pago.init({
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        min: 0
      }
    }

  }, {
    sequelize,
    modelName: 'Pago',
    tableName: 'pagos',
    timestamps: false,
    hooks: {
      // beforeCreate: async (pago, options) => {
      //   // 
      //   const Cliente = pago.sequelize.models.Cliente; 
      //   const cliente = await Cliente.findByPk(pago.cliente_id, {
      //     transaction: options.transaction,
      //     lock: options.transaction.LOCK.UPDATE
      //   })

      //   const valorPago = pago.valor;

      //   if (valorPago > cliente.por_pagarle){
      //     throw new Error('El valor del pago no puede ser mayor al total a pagar');
      //   }

      //   cliente.por_paparle = cliente.por_pagarle - valorPago;

      //   await cliente.save({
      //     transaction: options.transaction
      //   })


      // }

    }
  });
  return Pago;
};