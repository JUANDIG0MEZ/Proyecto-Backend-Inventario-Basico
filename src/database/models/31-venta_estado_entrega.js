'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class VentaEstadoEntrega extends Model {
    static associate (models) {
      VentaEstadoEntrega.hasMany(models.Venta, {
        foreignKey: 'estado_entrega_id',
        as: 'estadoEntregaVenta'
      })
    }
  }
  VentaEstadoEntrega.init({
    nombre: DataTypes.STRING(200)
  }, {
    sequelize,
    modelName: 'VentaEstadoEntrega',
    timestamps: false,
    tableName: 'VentaEstadoEntrega'

  })
  return VentaEstadoEntrega
}
