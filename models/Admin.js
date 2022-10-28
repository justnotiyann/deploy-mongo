const mongoose = require("mongoose");
const { Schema } = mongoose;
const db = require("../config/db");

const adminSchema = new Schema({
     email: String,
     password: String,
});

const Admin = db.model("admin", adminSchema);

module.exports = Admin;
