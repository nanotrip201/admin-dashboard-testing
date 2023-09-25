const { UserAnnualIncome } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

/**
 * @route : GET /master/annualIncome
 * @desc : All User Annual Income
 * @payload : <Empty>
 * @response : { "status", "message", "data": [{},...] }
 * @access Private
 * 
*/
const getAllUserAnnualIncome = async (req, res) => {
  return getAllData(UserAnnualIncome, res);
}; 

/**
 * Add a new user annualIncome
 * @route POST /master/addData
 * @payload { value }
 * @response Created user annualIncome object
 * @access Private
*/
const addNewUserAnnualIncome = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserAnnualIncome, addData);
}

/**
 * Update user annualIncome
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user annualIncome object
 * @access Private
*/
const updateUserAnnualIncome = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserAnnualIncome, id, updateUserData);
};

/**
 * Activate or deactivate user annualIncome
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user annualIncome object with activation status
 * @access Private
*/
const activateDeactivateUserAnnualIncome = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserAnnualIncome, id);
}


module.exports = {
    getAllUserAnnualIncome,
    updateUserAnnualIncome,
    addNewUserAnnualIncome,
    activateDeactivateUserAnnualIncome 
};