const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commonFields = require("../commonFields");

const UserOccupationSchema = new Schema({
  occupationName: {
    type: String,
    required: true,
  },
  ...commonFields,
});

let UserOccupation = mongoose.model("useroccupation", UserOccupationSchema);

module.exports = { UserOccupation };
