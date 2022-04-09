const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.URL);
module.exports = {
	host: process.env.URL
};
