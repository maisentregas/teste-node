require('dotenv').config();

module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USERNAMEDB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: false,
    }
};