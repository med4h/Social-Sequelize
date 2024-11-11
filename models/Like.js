const { sequelize } = require("../db");
const { Sequelize } = require('sequelize');

let Like = sequelize.define('like', {
    reactionType: Sequelize.STRING,
    CreatedAt: Sequelize.STRING
});

module.exports = Like;