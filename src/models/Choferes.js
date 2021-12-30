const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('choferes', {
    id: {
      //add uui
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,

    },
    apellido: {
      type: DataTypes.STRING,

    },
    documento: {
      type: DataTypes.STRING,

    },
    telefono: {
      type: DataTypes.STRING,

    },
    carnet: {
      type: DataTypes.ENUM("Si", "No"),
    },
    vencimientoCarnet: {
      type: DataTypes.STRING,
    }
  },
  {
    createdAt: false,
    updatedAt: false,
  }
  );
};
