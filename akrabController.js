const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const CALLBACK_URL = process.env.CALLBACK_URL;

exports.listPaket = async (req, res) => {
  try {
    const response = await axios.post("https://panel.khfy-store.com/api/khfy_v2/member/list_paket_v1", {
      api_key: API_KEY
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.beliPaket = async (req, res) => {
  const { msisdn, package_id, ref_id } = req.body;
  try {
    const response = await axios.post("https://panel.khfy-store.com/api/khfy_v2/member/buy_v1_no_otp", {
      api_key: API_KEY,
      mode: "callback",
      msisdn,
      package_id,
      url: CALLBACK_URL,
      ref_id
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.cekStatus = async (req, res) => {
  const { trx_id } = req.body;
  try {
    const response = await axios.post("https://panel.khfy-store.com/api/khfy_v2/member/history_trx", {
      api_key: API_KEY,
      action: "search",
      trx_id
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
