'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Album.belongsTo(models.Artist, {
        foreignKey: 'artistId'
      })
    }
  }
  Album.init({
    name: DataTypes.STRING,
    release: DataTypes.INTEGER,
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Artists',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};