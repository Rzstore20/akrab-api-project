const express = require("express");
const router = express.Router();
const {
  listPaket,
  beliPaket,
  cekStatus
} = require("../controllers/akrabController");

router.post("/paket", listPaket);
router.post("/beli", beliPaket);
router.post("/status", cekStatus);

module.exports = router;
