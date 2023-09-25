const { UserBloodGroup } = require("../../models/masterData/index");
const {
  getAllData,
  updateData,
  activateDeactivateStatus,
  addNewData,
} = require("../../services/index");

/**
 * @route : GET /master/bloodGroup
 * @desc : All User Blood Group
 * @payload : <Empty>
 * @response : { "status", "message", "data": [{},...] }
 * @access Private
 *
 */
const getAllUserBloodGroup = async (req, res) => {
  return getAllData(UserBloodGroup, res);
};

/**
 * Add a new user occupation-category
 * @route POST /master/add-data
 * @payload { value }
 * @response Created user occupation-category object
 * @access Private
 */
const addNewUserBloodGroup = async (req, res) => {
  const { value } = req.body;

  const addData = { value: value };

  return addNewData(req, res, UserBloodGroup, addData);
};

/**
 * Update user occupation-category
 * @route PUT /master/update-data
 * @payload { id, value, orderNumber }
 * @response Updated user occupation-category object
 * @access Private
 */
const updateUserBloodGroup = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = {
    value: value,
    orderNumber: orderNumber,
  };

  return updateData(req, res, UserBloodGroup, id, updateUserData);
};

/**
 * Activate or deactivate user occupation-category
 * @route PUT /master/update-data
 * @payload { id }
 * @response Updated user occupation-category object with activation status
 * @access Private
 */
const activateDeactivateBloodGroup = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserBloodGroup, id);
};

module.exports = {
  getAllUserBloodGroup,
  updateUserBloodGroup,
  activateDeactivateBloodGroup,
  addNewUserBloodGroup,
};