const router = require(`express`).Router();
const { json } = require("body-parser");
const bodyparser = require(`body-parser`);
const userModel = require("./../models/user_model");

router.post("/createaccount", async (req, res) => {
  const userData = req.body;
  const newUser = new userModel(userData);
  await newUser.save((err) => {
    if (err) {
      res.json({ success: false, error: err });
    }

    res.json({ success: true, data: newUser });
  });
});

module.exports = router;
