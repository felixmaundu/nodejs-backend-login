const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

// const User = db.define('User', {
// const Post = db.define('Posts', {
  // const { DataTypes } = require('sequelize');
  // const connection = require('../config/db.config');
  
  const Post = db.define('posts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  
  module.exports = Post;
  

