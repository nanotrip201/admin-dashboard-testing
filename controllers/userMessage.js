const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");
const UserMessageCollection = require("../models/userMessageCollection");

// @route GET api/message/message-count
// @desc fetch message-count
// @header ("token")
// @access Private
// This route handles fetching message-count that are sent by the users, received by the user.
const userMessageCount = async (req, res) => {
  try {
    // Extract the user's ID from the request object.
    const user_id = req.params.id;

    // Count of all messages that are sent by the user.
    const userSentMessageCount = await UserMessageCollection.count({
      from_user_id: user_id,
    });

    // Count of all messages that are received by the user.
    const userReceivedMessageCount = await UserMessageCollection.count({
      to_user_id: user_id,
    });

    // Return object that contains message-count.
    let response = {
      userSentMessageCount: userSentMessageCount,
      userReceivedMessageCount: userReceivedMessageCount,
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

// @route GET api/message/message-count
// @desc fetch message-count
// @header ("token")
// @access Private
// This route handles fetching message-count that are sent by the users, received by the user.
const userMessageData = async (req, res) => {
  try {
    // Extract the user's ID from the request object.
    const user_id = req.params.id;

    // Count of all messages that are sent by the user.
    const userSentMessages = await UserMessageCollection.find({
      from_user_id: user_id,
    }).populate("to_user_id","-password").populate("from_user_id","-password");

    // Count of all messages that are received by the user.
    const userReceivedMessages = await UserMessageCollection.find({
      to_user_id: user_id,
    }).populate("to_user_id","-password").populate("from_user_id","-password");

    // Return object that contains message-count.
    let response = {
      userSentMessages: userSentMessages,
      userReceivedMessages: userReceivedMessages,
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

module.exports = {userMessageCount, userMessageData};
