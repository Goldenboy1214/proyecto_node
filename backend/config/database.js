const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USER_BD}:${process.env.PASS_BD}@clusteradsi2557466.uhiweda.mongodb.net/${process.env.DB_NAME}`

mongoose.connect(URI);

module.exports = mongoose;

