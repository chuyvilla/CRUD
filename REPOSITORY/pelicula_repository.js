const { DataTypes } = require('sequelize')
const sequelize = require('../conexion')

const pelicula = sequelize.define(
  'pelicula',
  {

    peliculaId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    peliculaName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    peliculaDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {

  }
)

module.exports = pelicula