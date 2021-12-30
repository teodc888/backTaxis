const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recaudaciones', {
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
   total:{
        type: DataTypes.INTEGER,
        allowNull: false,
   },
    montoChofer:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gnc:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    kilometros:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gastosExtra:{
        type: DataTypes.STRING,
    },
    totalGastos:{
        type: DataTypes.INTEGER,

    }

  },
  {
    createdAt: false,
    updatedAt: false,
  }
  );
};
