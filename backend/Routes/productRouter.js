const productRouter = require("express").Router();
const { getAllProducts } = require("../utils/productUtil");

productRouter.get("/getdata", async (req, res) => {
  try {
    let productData = await getAllProducts();
    if (productData) {
      res.json({
        Success: 1,
        Msg: "Data found",
        Data: productData,
      });
    } else {
      res.json({
        Success: 0,
        Msg: "Data not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = productRouter;
