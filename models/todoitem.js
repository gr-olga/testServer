'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class todoItem extends Model {

    static associate(models) {
    }
  }
  todoItem.init({
    name: DataTypes.STRING,
    task: DataTypes.STRING,
    deadline: DataTypes.STRING,
    important: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'todoItem',
  });
  return todoItem;
};