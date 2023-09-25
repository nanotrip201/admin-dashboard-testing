const express = require("express");
const userRequestApprovalSettingSchema = require("../models/userRequestApprovalSetting");

// @route GET user/contact-sharing-count/:id
// @desc fetch contact-sharing-count
// @header ("token")
// @access Private
// This route handles fetching contact-sharing-count that are sent by the users, received by the user.
const userContactSharingCount = async (req, res) => {
  try {
    // Extract the user's ID from the request object.
    const user_id = req.params.id;

    // Count of all messages that are sent by the user.
    const userSentContactSharingCount = await userRequestApprovalSettingSchema.count({
      request_from: user_id,
    });

    // Count of all messages that are received by the user.
    const userReceivedContactSharingCount = await userRequestApprovalSettingSchema.count({
      request_to: user_id,
    });

    // Return object that contains message-count.
    let response = {
      userSentContactSharingCount: userSentContactSharingCount,
      userReceivedContactSharingCount: userReceivedContactSharingCount,
    };
    return res.status(200).json(response);
  } catch (error) {
    console.log(`Error while fetching message count: ${error}`);
    return res.status(500).json({
      message:
        "There was some problem processing the request. Please try again later.",
    });
  }
};


// GET /user/approval-data/:id
// @header ("token")
// @access Private
// This route handles fetching send and received contact share request that are sent by the users, received by the user.
const userRequestApprovalData = async (req, res) => {
  try {
    // Extract the user's ID from the request object.
    const user_id = req.params.id;
    // Count of all messages that are sent by the user.
    const userSentRequests = await userRequestApprovalSettingSchema.find({
      request_from: user_id,
    })
    .populate("request_from","-password").populate("request_to","-password");
    // Count of all messages that are received by the user.
    const userReceivedRequests = await userRequestApprovalSettingSchema.find({
      request_to: user_id,
    }).populate("request_from","-password").populate("request_to","-password");
    // Return object that contains message-count.
    let response = {
      userSentRequests: userSentRequests,
      userReceivedRequests: userReceivedRequests,
    };
    return res.status(200).json(response);
  } catch (error) {
    console.log(`Error while fetching message data: ${error}`);
    return res.status(500).json({
      message:
        "There was some problem processing the request. Please try again later.",
    });
  }
};
  
  module.exports = {userRequestApprovalData, userContactSharingCount};
  