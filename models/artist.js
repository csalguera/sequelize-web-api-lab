'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artist.hasMany(models.Album, {
        foreignKey: 'artistId',
        as: 'albums'
      })
    }
  }
  Artist.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    hometown: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};