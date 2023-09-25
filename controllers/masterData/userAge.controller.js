const { UserAge } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");


/**
 * @route : GET /master/age
 * @desc : All User age data
 * @payload : <Empty>
 * @response : { "status", "message", "data": [{},...] }
 * @access Private
 * 
*/
const getAllUserAge= async (req, res) => {
  return getAllData(UserAge, res);
}; 

/**
 * Add a new user age
 * @route POST /master/addData
 * @payload { value }
 * @response Created user age object
 * @access Private
*/
const addNewUserAge = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserAge, addData);
}

/**
 * Update user age
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user age object
 * @access Private
*/
const updateUserAge = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserAge, id, updateUserData);
};

/**
 * Activate or deactivate user Age
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user Age object with activation status
 * @access Private
*/
const activateDeactivateAge = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserAge, id);
}
module.exports = {
    getAllUserAge,addNewUserAge,updateUserAge,activateDeactivateAge
};