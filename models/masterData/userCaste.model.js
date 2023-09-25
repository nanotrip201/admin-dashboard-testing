const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commonFields = require("../commonFields");

const UserCastSchema = new Schema({
    cast_name: {
      type: String,
      required: true,
    },
    ...commonFields,
  });
  
  let UserCaste = mongoose.model("usercast", UserCastSchema);

module.exports = { UserCaste };
