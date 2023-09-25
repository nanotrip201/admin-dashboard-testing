const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Admin User Schema (full details)
const adminUserSchema = new Schema(
  {
    name: {
      type: String,
      default: "Admin"
    },
    dob: {
      type: String,
      required: false, // make it true when needed
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      validate: {
        validator: function (v) {
          return emailPattern.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: true
    },
    account_Status: {
      type: String,
      default: "A"
    },
    login_count: {
      type: Number,
      default: 1,
    },
    is_logged_in: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true
  }
)

// Model 
const AdminUser = mongoose.model("adminUsers", adminUserSchema);

module.exports = AdminUser;