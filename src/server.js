const mongodb = require(`mongodb`);
const express = require(`express`);
const mongoose = require(`mongoose`);
const app = express();

mongoose
  .connect(
    "mongodb+srv://AlienExotic:mukesh123@cluster0.epefl68.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.get("/", (req, resp) => {
      resp.send("shit");
    });
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});
