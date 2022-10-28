const mongoose = require("mongoose");
require("dotenv").config();

// Link
const uri = `mongodb+srv://iyan:${process.env.PASSWORD}@mongodb.xiwgycg.mongodb.net/?retryWrites=true&w=majority`;

// Koneksi
mongoose.connect(uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

// Membuat pesan message
const db = mongoose.connection;
db.on("error", () => console.log("gagal terhubung ke database"));
db.once("open", () => console.log("Berhasil terhubung ke database"));

module.exports = db;
