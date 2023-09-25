const { UserEducationCompletionYear } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

// @route GET /master/educationcompletionyear
// @payload <Empty>
// @response Array of all weight
// @access Private
const getAllUserEducationCompletionYear = async (req, res) => {
  return getAllData(UserEducationCompletionYear, res);
};

/**
 * Add a new user educationcompletionyear
 * @route POST /master/addData
 * @payload { value }
 * @response Created user educationcompletionyear object
 * @access Private
*/
const addNewUserEducationCompletionYear = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserEducationCompletionYear, addData);
}

/**
 * Update user educationcompletionyear
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user educationcompletionyear object
 * @access Private
*/
const updateUserEducationCompletionYear = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserEducationCompletionYear, id, updateUserData);
};

/**
 * Activate or deactivate user educationcompletionyear
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user educationcompletionyear object with activation status
 * @access Private
*/
const activateDeactivateUserEducationCompletionYear = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserEducationCompletionYear, id);
}

module.exports = {
  getAllUserEducationCompletionYear,
  addNewUserEducationCompletionYear,
  updateUserEducationCompletionYear,
  activateDeactivateUserEducationCompletionYear
};
