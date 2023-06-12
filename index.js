const mongoose = require("mongoose");
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/crm", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });