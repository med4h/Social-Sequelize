const { sequelize } = require("../db");
const { Sequelize } = require('sequelize');

let Comment = sequelize.define('comment', {
    body: Sequelize.STRING,
    CreatedAt: Sequelize.STRING
});


module.exports = Comment;