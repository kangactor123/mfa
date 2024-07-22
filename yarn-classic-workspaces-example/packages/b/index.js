const axios = require("axios");

module.exports = async function () {
  const res = await axios.get("https://api.github.com/users");
  return res.data;
};
