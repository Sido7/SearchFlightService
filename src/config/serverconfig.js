const dotenv = require('dotenv')

dotenv.config()

module.exports = {Port : process.env.Port,dbSync : process.env.Sync_db}