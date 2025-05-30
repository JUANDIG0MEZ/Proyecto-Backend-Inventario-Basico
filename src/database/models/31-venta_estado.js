const { Model } = require('sequelize');

'use strict';

module.exports = (sequelize, DataTypes) => {
  class VentaEstadoEntrega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      VentaEstadoEntrega.hasMany(models.Venta, {
        as: 'estadoVenta',
        foreignKey: 'estado_entrega_id'
      })
    }
  }
  VentaEstadoEntrega.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VentaEstadoEntrega',
    timestamps: false,
    tableName: 'VentaEstadoEntrega',

  });
  return VentaEstadoEntrega;
};