const { Model } = require('sequelize');

'use strict';

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.belongsTo(models.ClienteTipo, {
        foreignKey: 'tipo_id',
        as: 'tipoCliente'
      })

      Cliente.hasMany(models.Compra, {
        foreignKey: 'cliente_id',
        as: 'clienteCompra'
      })

      Cliente.hasMany(models.Venta, {
        foreignKey: 'cliente_id',
        as: 'clienteVenta'
      })

      Cliente.hasMany(models.Pago, {
        foreignKey: 'cliente_id',
        as: 'clientePago'
      })

      Cliente.hasMany(models.Abono, {
        foreignKey: 'cliente_id',
        as: 'clienteAbono'
      })
    }
  }
  Cliente.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue('nombre', value.toLowerCase().trim());
      },
      get() {
        const nombre = this.getDataValue('nombre');
        return nombre ? nombre.replace(/\b\w/g, (char) => char.toUpperCase()) : '';
      }
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefono: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3,
      references: {
        model: 'clientes_tipos',
        key: 'id'
      }
    },
    por_pagarle: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        isInt: true
      }
    },
    debe: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        isInt: true
      }
    }
  }, {
    sequelize,
    modelName: 'Cliente',
    timestamps: false,
    tableName: 'Cliente'
  });
  return Cliente;
};