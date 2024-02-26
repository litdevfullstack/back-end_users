const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

const User = sequelize.define('user', {

    email: {
        type: DataTypes.STRING
    },

    password: {
        type: DataTypes.STRING
        
    },

    first_name: {
        type: DataTypes.STRING
    },

    last_name: {
        type: DataTypes.STRING
        
    },
    
    birthday: {
        type: DataTypes.DATE
    }

});

module.exports = User;