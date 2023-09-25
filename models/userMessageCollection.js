const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const UserMessageSchema = new Schema({
  from_user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:"users"
  },
  to_user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:"users"
  },
  message: {
    type: String,
    required: true,
  },
  is_read: {
    type: Number,
    required: true,
    default: 0,
  },
  inserted_by: {
    type: Schema.Types.ObjectId,
  },
  inserted_at: {
    type: Date,
    default: Date.now,
  },
});

let UserMessageCollection = mongoose.model(
  "userMessageCollection",
  UserMessageSchema
);
module.exports = UserMessageCollection;
