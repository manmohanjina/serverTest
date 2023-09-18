const express = require("express");
const app = express();
const cors = require("cors");
const { ApiGetFun } = require("./apiCalling");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/putapi", async (req, res) => {
  const api = req.body.url;
  console.log(api);
  try {
    let data = await ApiGetFun(api);
    console.log(data, "data");
    return res.json({ res: data });
  } catch (error) {
    console.log(error, "internal sever error");
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log("running");
});
