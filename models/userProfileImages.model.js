const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const UsersProfileImagesSchema = new Schema({
  profileImages: {
    type: String,
  },

  user_id: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  status: {
    type: String,
    default: "A",
  },
  inserted_by: {
    type: Schema.Types.ObjectId,
  },

  inserted_at: {
    type: Date,
    default: Date.now,
  },

  modified_by: {
    type: Schema.Types.ObjectId,
  },
  modified_at: {
    type: Date,
  },
});

let usersProfileImagesSchema = mongoose.model(
  "usersProfileImages",
  UsersProfileImagesSchema
);
module.exports = usersProfileImagesSchema;
