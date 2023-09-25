const { UserFamilyValues } = require("../../models/masterData/index");
const { getAllData, addNewData, updateData, activateDeactivateStatus } = require("../../services/index");

/**
 * @route : GET /master/familyValues
 * @desc : All User Family Values
 * @payload : <Empty>
 * @response : { "status", "message", "data": [{},...] }
 * @access Private
 * 
*/
const getAllUserFamilyValues = async (req, res) => {
  return getAllData(UserFamilyValues, res);
};

/**
 * Add a new user weight
 * @route POST /master/addData
 * @payload { value }
 * @response Created user weight object
 * @access Private
*/
const addNewUserFamilyValues = async (req, res) => {
  const { value } = req.body;
  const addData = { value: value }
  return addNewData(req, res, UserFamilyValues, addData);
}
/**
 * Update user weight
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user weight object
 * @access Private
*/
const updateUserFamilyValues = async (req, res) => {
  const { id, value, orderNumber } = req.body;
  const updateUserData = {
    value: value,
    orderNumber: orderNumber
  };

  return updateData(req, res, UserFamilyValues, id, updateUserData);
};
/**
 * Activate or deactivate user weight
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user weight object with activation status
 * @access Private
*/
const activateDeactivateFamilyValues = async (req, res) => {
  const { id } = req.body;
  return activateDeactivateStatus(req, res, UserFamilyValues, id);
}
module.exports = {
  getAllUserFamilyValues,
  updateUserFamilyValues,
  activateDeactivateFamilyValues,
  addNewUserFamilyValues
};