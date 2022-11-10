const mongodb = require(`mongodb`);
const express = require(`express`);
const mongoose = require(`mongoose`);
const bosyParser = require(`bady-parser`);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose
  .connect(
    "mongodb+srv://AlienExotic:mukesh123@cluster0.epefl68.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.get("/", (req, resp) => {
      resp.send("shit");
    });

    const userRoutes = require(`./routes/user_routes`);
    app.use(`/api/user`, userRoutes);
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});
