const { UserHeight } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

// @route GET /masters/height
// @payload <Empty>
// @response Array of all height
// @access Private
const getAllUserHeight= async (req, res) => {
  return getAllData(UserHeight, res);
}; 


/**
 * Add a new user weight
 * @route POST /master/addData
 * @payload { value }
 * @response Created user weight object
 * @access Private
*/
const addNewUserHeight = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }
  console.log(req,res,value)

  return addNewData(req, res, UserHeight, addData);
  
}


/**
 * Update user weight
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user weight object
 * @access Private
*/
const updateUserHeight = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserHeight, id, updateUserData);
};

/**
 * Activate or deactivate user weight
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user weight object with activation status
 * @access Private
*/
const activateDeactivateHeight = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserHeight, id);
}

module.exports = {
    getAllUserHeight,
    updateUserHeight,
    activateDeactivateHeight,
    addNewUserHeight
};