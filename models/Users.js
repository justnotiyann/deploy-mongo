const mongoose = require("mongoose");
const { Schema } = mongoose;
const db = require("../config/db");

const userSchema = new Schema({
     nama: String,
     email: String,
     umur: String,
});

const Users = db.model("user", userSchema);

module.exports = Users;
