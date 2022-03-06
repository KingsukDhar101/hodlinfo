const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const productRouter = require("./Routes/productRouter");
const CORS = require("cors");

app.use(express.json());
app.use(CORS());

app.use("/api", productRouter);

app.get("/", (req, res) => {
  res.send("response @ /");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
