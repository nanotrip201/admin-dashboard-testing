const { UserLanguage } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData } = require("../../services/index");

// @route GET /master/language
// @payload <Empty>
// @response Array of all language
// @access Private
const getAllUserLanguage= async (req, res) => {
  return getAllData(UserLanguage, res);
}; 

/**
 * Add a new user language
 * @route POST /master/addData
 * @payload { value }
 * @response Created user language object
 * @access Private
*/
const addNewUserLanguage = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserLanguage, addData);
}

/**
 * Update user language
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user language object
 * @access Private
*/
const updateUserLanguage = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserLanguage, id, updateUserData);
};

/**
 * Activate or deactivate user language
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user language object with activation status
 * @access Private
*/
const activateDeactivateLanguage = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserLanguage, id);
}


module.exports = {
    getAllUserLanguage,
    updateUserLanguage,
    activateDeactivateLanguage,
    addNewUserLanguage
};