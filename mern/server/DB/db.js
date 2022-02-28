const db = require("mongoose");

db.connect("mongodb+srv://MarcosMongo:6FA3XpgbRPAJmNP@store-cluster.jbdtv.mongodb.net/StoreDb?retryWrites=true&w=majority");

module.exports = db.connection;