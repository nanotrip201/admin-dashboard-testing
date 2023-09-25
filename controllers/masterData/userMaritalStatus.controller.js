const { UserMaritalStatus } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

// @route GET /master/marital-status
// @payload <Empty>
// @response Array of all marital-status
// @access Private
const getAllUserMaritalStatus = async (req, res) => {
  return getAllData(UserMaritalStatus, res);
};

/**
 * Add a new user marital-status
 * @route POST /master/add-data
 * @payload { value }
 * @response Created user marital-status object
 * @access Private
*/
const addNewUserMaritalStatus = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserMaritalStatus, addData);
}

/**
 * Update user marital-status
 * @route PUT /master/update-data
 * @payload { id, value, orderNumber }
 * @response Updated user marital-status object
 * @access Private
*/
const updateUserMaritalStatus = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };

  return updateData(req, res, UserMaritalStatus, id, updateUserData);
};

/**
 * Activate or deactivate user marital-status
 * @route PUT /master/update-data
 * @payload { id }
 * @response Updated user marital-status object with activation status
 * @access Private
*/
const activateDeactivateMaritalStatus = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserMaritalStatus, id);
}

module.exports = {
  getAllUserMaritalStatus,
  updateUserMaritalStatus,
  activateDeactivateMaritalStatus,
  addNewUserMaritalStatus
};