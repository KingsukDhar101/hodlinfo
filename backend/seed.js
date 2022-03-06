let client = require("./db");
// const data = require('./');
const axios = require("axios");

async function fetchData() {
  try {
    let top10Data = [];
    let response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    let data = response.data;

    let counter = 0;
    for (let key in data) {
      if (counter == 10) {
        break;
      } else {
        const check = data[key];
        if (check.volume > 0) {
          top10Data.push(data[key]);
          counter++;
        }
      }
    }

    top10Data.map((obj) => {
      try {
        const { name, last, buy, sell, volume, base_unit } = obj;
        client.query(
          `insert into hodlinfo1(name, last, buy, sell, volume, base_unit) values($1,$2,$3,$4,$5,$6)`,
          [name, last, buy, sell, volume, base_unit]
        );
        console.log(name, last, buy, sell, volume, base_unit);
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
fetchData();
