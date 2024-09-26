'use strict';
const {
  Model,
  ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Bookmark, { foreignKey: "movieId"});
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    trailerUrl: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    rating: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};