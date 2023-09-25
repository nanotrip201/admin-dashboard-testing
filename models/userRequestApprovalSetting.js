const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const UserRequestApprovalSettingSchema = new Schema({
  request_from: {
    type: Schema.Types.ObjectId,
    require: true,
    ref:"users"
  },

  request_to: {
    type: Schema.Types.ObjectId,
    require: true,
    ref:"users"
  },

  approval_status: {
    type: Number,
    require: true,
    default: 0
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

  status: {
    type: String,
    default: "A",
  },

  deleted_by: {
    type: Schema.Types.ObjectId,
  },
  deleted_at: {
    type: Date,
  },
});

let userRequestApprovalSettingSchema = mongoose.model(
  "userRequestApprovalSetting",
  UserRequestApprovalSettingSchema
);
module.exports = userRequestApprovalSettingSchema;