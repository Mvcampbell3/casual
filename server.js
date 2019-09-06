const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const dbase = "casual";

mongoose
  .connect(process.env.MONGODB_URI || `mongodb://localhost/${dbase}`, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoDB linked");
    
  });

app.get("/", (req, res, next) => {
  res.status(200).json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`server is live on http://localhost:${PORT}`)
})