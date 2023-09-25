const { UserFamilyType } = require("../../models/masterData/index");
const {
  getAllData,
  updateData,
  activateDeactivateStatus,
  addNewData,
} = require("../../services/index");

/**
 * @route : GET /master/familyType
 * @desc : All User Family Type
 * @payload : <Empty>
 * @response : { "status", "message", "data": [{},...] }
 * @access Private
 *
 */
const getAllUserFamilyTypes = async (req, res) => {
  return getAllData(UserFamilyType, res);
};

/**
 * Add a new user family type
 * @route POST /master/addData
 * @payload { value }
 * @response Created user family type object
 * @access Private
 */
const addNewUserFamilyTypes = async (req, res) => {
  const { value } = req.body;

  const addData = { value: value };

  return addNewData(req, res, UserFamilyType, addData);
};

/**
 * Update user family type
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user family type object
 * @access Private
 */
const updateUserFamilyTypes = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = {
    value: value,
    orderNumber: orderNumber,
  };

  return updateData(req, res, UserFamilyType, id, updateUserData);
};

/**
 * Activate or deactivate user family type
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user family type object with activation status
 * @access Private
 */
const activateDeactivateUserFamilyTypes = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserFamilyType, id);
};

module.exports = {
  getAllUserFamilyTypes,
  addNewUserFamilyTypes,
  updateUserFamilyTypes,
  activateDeactivateUserFamilyTypes,
};
