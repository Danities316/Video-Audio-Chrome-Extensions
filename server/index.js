const express = require("express");
const { validate, Joi } = require("express-validation");
const ytdl = require("ytdl-core");
const cors = require("cors");

const app = express();

app.use(cors());


app.get("/download", (req, res) => {
  const url = req.query.url;
  const format= req.query.format
  const quality = req.query.quality
  video = ytdl(url, {
    format: format,
    quality: quality,
  }).pipe(res)
  
});

const port = 4000;

const start = () => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}....`);
  });
};
start();
