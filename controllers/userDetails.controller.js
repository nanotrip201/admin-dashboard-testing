const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");
const existingUser = require("../models/User");

const getUserDetails = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const matchQuery = {
      $match: { _id: id },
    };
    const lookupUser = {
      $lookup: {
        from: "userdetails",
        localField: "_id",
        foreignField: "user_id",
        as: "userDetails",
      },
    };
    const unwindUser = { $unwind: "$userDetails" };
    existingUser
      .aggregate([lookupUser, unwindUser, matchQuery])
      .then((users) => {
        res.json(users[0]);
      })
      .catch((error) => {
        console.log(`Error while fetch user: ${error}`);
        return res.status(500).json({
          message:
            "Something went wrong with the request, please try again later.",
        });
      });
  } catch (e) {
    console.log(`Error while fetch user: ${e}`);
    return res.status(500).json({
      message: "Something went wrong with the request, please try again later.",
    });
  }
};

module.exports = { getUserDetails };
