const { UserOccupationCategory } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData } = require("../../services/index");

/**
 * @route : GET /master/occupationCategory
 * @desc : All User Occupation Category
 * @payload : <Empty>
 * @response : { "status", "message", "data": [{},...] }
 * @access Private
 * 
*/
const getAllUserOccupationCategory = async (req, res) => {
  return getAllData(UserOccupationCategory, res);
}; 

/**
 * Add a new user occupation-category
 * @route POST /master/add-data
 * @payload { value }
 * @response Created user occupation-category object
 * @access Private
*/
const addNewUserOccupationCategory = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserOccupationCategory, addData);
}

/**
 * Update user occupation-category
 * @route PUT /master/update-data
 * @payload { id, value, orderNumber }
 * @response Updated user occupation-category object
 * @access Private
*/
const updateUserOccupationCategory = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };

  return updateData(req, res, UserOccupationCategory, id, updateUserData);
};

/**
 * Activate or deactivate user occupation-category
 * @route PUT /master/update-data
 * @payload { id }
 * @response Updated user occupation-category object with activation status
 * @access Private
*/
const activateDeactivateOccupationCategoryStatus = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserOccupationCategory, id);
}

module.exports = {
  getAllUserOccupationCategory,
  updateUserOccupationCategory,
  activateDeactivateOccupationCategoryStatus,
  addNewUserOccupationCategory
};