const router = require("express").Router();
const Admin = require("../models/Admin");
const argon2 = require("argon2");

router.get("/", (req, res) => {
     
});

router.post("/daftar", async (req, res) => {
     const { email, password } = req.body;
     const hash = await argon2.hash(password);
     const data = new Admin({
          email,
          hash,
     });
     try {
          const result = await data.save();
          if (!result) res.json({ msg: "Data gagal ditambahkan" });
          res.json({ msg: "Data berhasil ditambahkan", result });
     } catch (e) {
          res.json({ msg: "terjadi erorr", e });
     }
});

module.exports = router;
