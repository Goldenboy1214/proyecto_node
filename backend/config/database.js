const mongoose = require('mongoose');
require('dotenv').config();

const URI = "mongodb+srv://juan:XcVPysk740LrPiEW@clusteradsi2557466.uhiweda.mongodb.net/"

mongoose.connect(URI);

module.exports = mongoose;

