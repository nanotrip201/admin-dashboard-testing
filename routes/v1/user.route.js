const express = require("express");

const userMessage = require("../../controllers/userMessage");
const user = require("../../controllers/user");
const auth = require("../../middleware/auth");
const userRequestApprovalSetting = require("../../controllers/userRequestApprovalSetting");
const { getUserDetails } = require("../../controllers/userDetails.controller");
const { getMultipleImages } = require("../../controllers/userProfileImages.controller");
const userRouter = express.Router();


// User should be authenticate
// User should be authorize
// GET /user/users-details
// @header ("token")
// @access Private
// This route handles fetching All users and their details.
userRouter.get("/users-details", auth, user.getAllUsers);

// User should be authenticate
// User should be authorize
// GET /user/message-count/:id
// @header ("token")
// @access Private
// This route handles fetching message-count that are sent by the users, received by the user.
userRouter.get("/message-count/:id", auth, userMessage.userMessageCount);

// User should be authenticate
// User should be authorize
// GET /user/message-count/:id
// @header ("token")
// @access Private
// This route handles fetching message-count that are sent by the users, received by the user.
userRouter.get("/message-data/:id", auth, userMessage.userMessageData);

// User should be authenticate
// User should be authorize
// GET /user/approval-data/:id
// @header ("token")
// @access Private
// This route handles fetching send and received contact share request that are sent by the users, received by the user.
userRouter.get("/approval-data/:id", auth, userRequestApprovalSetting.userRequestApprovalData);

// User should be authenticate
// User should be authorize
// GET /user/contact-sharing-count/:id
// @header ("token")
// @access Private
// This route handles fetching contact-sharing-count that are sent by the users, received by the user.
userRouter.get("/contact-sharing-count/:id", auth, userRequestApprovalSetting.userContactSharingCount);

// @route GET user/details/:id
// @desc Get user by id
// @header ("token")
// @payload <Empty>
// @response [Array of single user]
// @access private
userRouter.get("/details/:id", auth, getUserDetails);

// @route get user/multiple-images/:id
// @desc get user Images
// @header ("token")
// @response  (data)
// @access Private
userRouter.get("/multiple-images/:id", auth, getMultipleImages);

module.exports = userRouter;
