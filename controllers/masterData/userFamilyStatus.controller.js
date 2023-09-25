const { UserFamilyStatus } = require("../../models/masterData/index");
const { getAllData, addNewData, updateData, activateDeactivateStatus } = require("../../services/index");

/**
 * @route : GET /master/familyStatus
 * @desc : All User Family Status
 * @payload : <Empty>
 * @response : { "status", "message", "data": [{},...] }
 * @access Private
 * 
*/
const getAllUserFamilyStatus = async (req, res) => {
  return getAllData(UserFamilyStatus, res);
};

/**
 * Add a new user weight
 * @route POST /master/addData
 * @payload { value }
 * @response Created user weight object
 * @access Private
*/
const addNewUserFamilyStatus = async (req, res) => {
  const { value } = req.body;
  const addData = { value: value }
  return addNewData(req, res, UserFamilyStatus, addData);
}
/**
 * Update user weight
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user weight object
 * @access Private
*/
const updateUserFamilyStatus = async (req, res) => {
  const { id, value, orderNumber } = req.body;
  const updateUserData = {
    value: value,
    orderNumber: orderNumber
  };

  return updateData(req, res, UserFamilyStatus, id, updateUserData);
};
/**
 * Activate or deactivate user weight
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user weight object with activation status
 * @access Private
*/
const activateDeactivateFamilyStatus = async (req, res) => {
  const { id } = req.body;
  return activateDeactivateStatus(req, res, UserFamilyStatus, id);
}
module.exports = {
  getAllUserFamilyStatus,
  updateUserFamilyStatus,
  activateDeactivateFamilyStatus,
  addNewUserFamilyStatus
};