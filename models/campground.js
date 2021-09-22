const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

module.eport = mongose.model("Campground", campgroundSchema);
