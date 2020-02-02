'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artiste = sequelize.define('Artiste', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    surnom: DataTypes.STRING,
    age: DataTypes.INTEGER,
    role: DataTypes.STRING,
    TroupeId: DataTypes.INTEGER
  }, {});
  Artiste.associate = (models) => {
    models.Artiste.belongsTo(models.Troupe)
  };
  return Artiste;
};