const mongoose = require(`mongoose`);

const userSchema = new mongoose.Schema({
  userid: { type: String, unique: true },
  fullname: { type: String },
  email: { type: String, unique: true },
  phone: { type: Number, unique: true },
  password: { type: String },

  address: { type: String },
  country: { type: String },
  city: { type: String },
  pincode: { type: String },

  addedon: { type: Date, default: Date.now },
});

const usermodel = mongoose.model("User", userSchema);

module.exports = usermodel;
