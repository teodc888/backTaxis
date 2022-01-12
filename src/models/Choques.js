const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('choques', {
    id: {
      //add uui
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    dia:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fotos:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    seguro:{
        type: DataTypes.STRING,

    },
    poliza:{
        type: DataTypes.STRING,
    },
    nombre:{
        type: DataTypes.STRING,
    },
    apellido:{
        type: DataTypes.STRING,
    },
    dni:{
        type: DataTypes.STRING,
    },
    telefono:{
        type: DataTypes.STRING,
    },
    placa:{
        type: DataTypes.STRING,
    },
    marca:{
        type: DataTypes.STRING,
    },

  },
  {
    createdAt: false,
    updatedAt: false,
  }
  );
};
