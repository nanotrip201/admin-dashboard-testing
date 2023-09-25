const { UserProfileCreatedBy } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

// @route GET /masters/profileCreatedBy
// @payload <Empty>
// @response Array of all profileCreatedBy
// @access Private
const getAllUserProfileCreatedBy = async (req, res) => {
  return getAllData(UserProfileCreatedBy, res);
}; 

/**
 * Add a new user weight
 * @route POST /master/addData
 * @payload { value }
 * @response Created user weight object
 * @access Private
*/
const addNewUserProfileCreatedBy = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserProfileCreatedBy, addData);
}


/**
 * Update user weight
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user weight object
 * @access Private
*/
const updateUserProfileCreatedBy = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserProfileCreatedBy, id, updateUserData);
};

/**
 * Activate or deactivate user weight
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user weight object with activation status
 * @access Private
*/
const activateDeactivateProfileCreatedBy = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserProfileCreatedBy, id);
}


module.exports = {
    getAllUserProfileCreatedBy,
    addNewUserProfileCreatedBy,
    updateUserProfileCreatedBy,
    activateDeactivateProfileCreatedBy
};