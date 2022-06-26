const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

mongoose
  .connect(
    "mongodb+srv://hanull:gksdnf90@cluster0.5nbgg.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`listening on ${port}...`);
});

// TODO : 서버 기본세팅 숙지해오기.

// MongoDB 라는걸 사용할 것.
// PostgeSQL <- 사용 하겠다고 했었는데

// mongodb+srv://hanull:<password>@cluster0.5nbgg.mongodb.net/?retryWrites=true&w=majority
