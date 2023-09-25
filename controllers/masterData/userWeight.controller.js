const { UserWeight } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

// @route GET /master/weight
// @payload <Empty>
// @response Array of all weight
// @access Private
const getAllUserWeight = async (req, res) => {
  return getAllData(UserWeight, res);
};

/**
 * Add a new user weight
 * @route POST /master/addData
 * @payload { value }
 * @response Created user weight object
 * @access Private
*/
const addNewUserWeight = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserWeight, addData);
}

/**
 * Update user weight
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user weight object
 * @access Private
*/
const updateUserWeight = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserWeight, id, updateUserData);
};

/**
 * Activate or deactivate user weight
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user weight object with activation status
 * @access Private
*/
const activateDeactivateWeight = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserWeight, id);
}

module.exports = {
  getAllUserWeight,
  updateUserWeight,
  activateDeactivateWeight,
  addNewUserWeight
};
