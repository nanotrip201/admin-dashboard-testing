const { UserDietPreference } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData } = require("../../services/index");

/**
 * @route : GET /master/dietPreference
 * @desc : All User Diet Preference
 * @payload : <Empty>
 * @response : { "status", "message", "data": [{},...] }
 * @access Private
 * 
*/
const getAllUserDietPreference = async (req, res) => {
  return getAllData(UserDietPreference, res);
}; 

/**
 * Add a new user diet preference
 * @route POST /master/addData
 * @payload { value }
 * @response Created user diet preference object
 * @access Private
*/
const addNewUserDietPreference = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value};

  return addNewData(req, res, UserDietPreference, addData);
}

/**
 * Update user diet preference
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user diet preference object
 * @access Private
*/
const updateUserDietPreference = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserDietPreference, id, updateUserData);
};

/**
 * Activate or deactivate user diet preference
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user diet preference object with activation status
 * @access Private
*/
const activateDeactivateDietPreference = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserDietPreference, id);
}

module.exports = {
  getAllUserDietPreference ,
  updateUserDietPreference,
  activateDeactivateDietPreference,
  addNewUserDietPreference
};