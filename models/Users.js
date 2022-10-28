const mongoose = require("mongoose");
const { Schema } = mongoose;
const db = require("../config/db");

const col_user = new Schema({
     nama: String,
     email: String,
     umur: String,
});

const Users = db.model("user", col_user);

Users.create(
     {
          nama: "Muhammad Almadina",
          email: "almadinamuhamamd@gmail.com",
          umur: "30",
     },
     (err, data) => {
          if (err) console.log(err);
          console.log("data berhasil ditambahkan : ", data);
     }
);

// const iyan = new Users({
//      nama: "almadina",
//      email: "hanjogan@gmail.com",
//      umur: "30",
// });

// Users.create((err, data) => {
//      if (err) console.log("Gagal menambah data");
//      console.log(`Berhasil menambahkan data, : ${data}`);
// });
module.exports = Users;
