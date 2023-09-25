const express = require("express");
const router = express.Router();

function isFieldPresentInRequest(reqBody, fieldName) {
  try {
    return (
      reqBody.hasOwnProperty(fieldName) &&
      reqBody[fieldName] !== null &&
      reqBody[fieldName] !== undefined &&
      reqBody[fieldName] !== ""
    );
  } catch (e) {
    console.log(`Error while check field name: ${e}`);
    return false;
  }
}

const getRange = (pageNumber) => {
  const limit = 5;
  let higherLimit = pageNumber * limit;
  let lowerLimit = 0;
  if (higherLimit > limit) {
    lowerLimit = higherLimit - limit;
  } else {
    higherLimit = limit;
  }
  return { lowerLimit, higherLimit };
};


module.exports = {
  isFieldPresentInRequest, getRange
};
