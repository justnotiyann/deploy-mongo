const router = require("express").Router();
const Users = require("../models/Users");

router.get("/", async (req, res) => {
     res.send("oe");
});

router.post("/signup", async (req, res) => {
     const { nama, email, umur } = req.body;
     const data = new Users({
          nama,
          email,
          umur,
     });
     try {
          const result = await data.save();
          if (!result) res.json({ msg: "Gagal add data" });
          res.json({ msg: "Berhasil menambahkan data", result });
     } catch (e) {}
});

module.exports = router;
