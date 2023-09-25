const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");
const existingUser = require("../models/User");
const usersProfileImagesSchema = require("../models/userProfileImages.model");

const getMultipleImages = async (req, res) => {
  try {
    const user_id = req.params.id;
    existingUser
      .findOne({ _id: user_id })
      .then((user) => {
        if (!user) {
          console.log(`User does not exist.`);
          return res.status(400).json({
            message: "User does not exist.",
          });
        }

        usersProfileImagesSchema
          .find({ user_id, status: "A" })
          .then((userDetails, err) => {
            if (err) {
              console.log(
                `Error while fetching user's mulitple images: ${err}`
              );
              return res.status(500).json({
                message:
                  "There was some problem processing the request. Please try again later.",
              });
            }
            return res.status(201).json(userDetails);
          })
          .catch((error) => {
            console.log(
              `Error while fetching user's mulitple images: ${error}`
            );
            return res.status(500).json({
              message:
                "There was some problem processing the request. Please try again later.",
            });
          });
      })
      .catch((error) => {
        console.log(`Error while fetching user's mulitple images: ${error}`);
        return res.status(500).json({
          message:
            "There was some problem processing the request. Please try again later.",
        });
      });
  } catch (e) {
    console.log(`Error while fetching user's mulitple images: ${e}`);
    return res.status(500).json({
      message:
        "There was some problem processing the request. Please try again later.",
    });
  }
};

module.exports = { getMultipleImages };
