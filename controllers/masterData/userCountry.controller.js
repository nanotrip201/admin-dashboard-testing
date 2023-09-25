const { UserCountry } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

// @route GET /master/country
// @payload <Empty>
// @response Array of all country
// @access Private
const getAllUserCountry = async (req, res) => {
  return getAllData(UserCountry, res);
};

/**
 * Add a new user country
 * @route POST /master/addData
 * @payload { value }
 * @response Created user country object
 * @access Private
*/
const addNewUserCountry = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserCountry, addData);
}

/**
 * Update user country
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user country object
 * @access Private
*/
const updateUserCountry = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserCountry, id, updateUserData);
};

/**
 * Activate or deactivate user country
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user country object with activation status
 * @access Private
*/
const activateDeactivateCountry = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserCountry, id);
}

module.exports = {
  getAllUserCountry,
  updateUserCountry,
  activateDeactivateCountry,
  addNewUserCountry
};
