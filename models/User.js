const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  current_location: {
    type: String,
    required: true
  },
  account_status: {
    type: String,
    default: "A",
  },
  inserted_by: {
    type: Schema.Types.ObjectId,
  },

  is_logged_in: {
    type: Boolean,
    default: true,
  },

  login_count: {
    type: Number,
    default: 1,
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
  deleted_by: {
    type: Schema.Types.ObjectId,
  },
  deleted_at: {
    type: Date,
  },
});

let existingUser = mongoose.model("users", UserSchema);
module.exports = existingUser;
