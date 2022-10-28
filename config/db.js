const mongoose = require("mongoose");
require("dotenv").config();
// Koneksi
mongoose.connect(process.env.DB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

// Membuat pesan message
const db = mongoose.connection;
db.on("error", () => console.log("gagal terhubung ke database"));
db.once("open", () => console.log("Berhasil terhubung ke database"));

module.exports = db;
