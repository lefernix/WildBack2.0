'use strict';
module.exports = (sequelize, DataTypes) => {
  const Troupe = sequelize.define('Troupe', {
    ville: DataTypes.STRING,
    description: DataTypes.STRING,
    tarif_Enfant: DataTypes.INTEGER,
    tarif_Adulte: DataTypes.INTEGER,
    note: DataTypes.INTEGER
  }, {});
  Troupe.associate = (models) => {
    models.Troupe.hasMany(models.Artiste)
  };
  return Troupe;
};