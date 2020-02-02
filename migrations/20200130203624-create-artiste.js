'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Artistes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      prenom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      surnom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TroupeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Troupes',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Artistes');
  }
};