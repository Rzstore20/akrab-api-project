const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const akrabRoutes = require("./routes/akrab");

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", akrabRoutes);

app.post("/callback", (req, res) => {
  console.log("📥 CALLBACK DITERIMA:", req.body);
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
