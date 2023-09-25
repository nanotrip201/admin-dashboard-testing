const { UserMotherTongue } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

// @route GET /master/motherTongue
// @payload <Empty>
// @response Array of all motherTongue
// @access Private
const getAllUserMotherTongue = async (req, res) => {
  return getAllData(UserMotherTongue, res);
}; 


/**
 * Add a new user motherTongue
 * @route POST /master/addData
 * @payload { value }
 * @response Created user motherTongue object
 * @access Private
*/
const addNewUserMotherTongue = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserMotherTongue, addData);
}

/**
 * Update user motherTongue
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user motherTongue object
 * @access Private
*/
const updateUserMotherTongue = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserMotherTongue, id, updateUserData);
};

/**
 * Activate or deactivate user motherTongue
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user motherTongue object with activation status
 * @access Private
*/
const activateDeactivateMotherTongue = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserMotherTongue, id);
}

module.exports = {
  getAllUserMotherTongue,
  addNewUserMotherTongue,
  updateUserMotherTongue,
  activateDeactivateMotherTongue
};