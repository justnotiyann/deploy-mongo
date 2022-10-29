const router = require("express").Router();
const Product = require("../models/Products");

// CREATE READ UPDATE DELETE

// localhost:3000/product READ
router.get("/", async (req, res) => {
     const getProduct = await Product.find();
     if (!getProduct) res.json({ msg: "terjadi kesalahan" });
     if (getProduct <= 0) res.json({ msg: "Data tidak ada" });
     res.json({ msg: "berikut data product", getProduct });
});

// CREATE
router.post("/add", async (req, res) => {
     const { product_name, country, price } = req.body;
     const getDataProduct = new Product({
          product_name,
          country,
          price,
     });
     try {
          const result = await getDataProduct.save();
          if (!result) res.json({ msg: "Terjadi kesalahan saat input data" });
          res.json({ msg: "Data berhasil ditambahkan", result });
     } catch (e) {
          res.json({ msg: "Terjadi kesalahan", e });
     }
});

// get by id READ BY ID
router.get("/get/:id", async (req, res) => {
     const id = req.params.id;
     const getDataProduct = await Product.find({ _id: id });
     if (!getDataProduct) res.json({ msg: "Terjadi kesalahan" });
     if (getDataProduct <= 0) res.json({ msg: "data tidak ditemukan" });
     res.json({ msg: "Berikut data product terkait", getDataProduct });
     res.json({ msg: "gagal mencari data" });
});

// DELETE
router.get("/delete/:id", async (req, res) => {
     const id = req.params.id;
     const getIdProduct = await Product.find({ id });
     if (!getIdProduct) res.json({ msg: "data tidak ditemukan" });
     try {
          const getDeleteProduct = await Product.deleteOne({ _id: id });
          if (!getDeleteProduct) res.json({ msg: "data gagal dihapus" });
          res.json({
               msg: `data ${getIdProduct[0].product_name} berhasil dihapus`,
          });
     } catch (e) {
          res.json({ msg: "terjadi kesalahan", e });
     }
});

// UPDATE
router.get("/update/:id", async (req, res) => {
     try {
          const id = req.params.id;
          const getDataProduct = await Product.find({ _id: id });
          if (!getDataProduct) res.json({ msg: "data tidak ditemukan" });
          const getBody = req.body;
          const options = { new: true };
          const result = await Product.findByIdAndUpdate(id, getBody, options);
          if (!result) res.json({ msg: "data gagal diedit" });
          res.json({ msg: "data berhasil diedit", result });
     } catch (e) {
          res.json({
               msg: "Data tidak ditemukan, Harap input data dengan benar",
          });
     }
});

module.exports = router;
