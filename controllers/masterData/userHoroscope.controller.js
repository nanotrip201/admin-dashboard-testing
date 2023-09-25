const { UserHoroscope } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

// @route GET /master/horoscope
// @payload <Empty>
// @response Array of all horoscope
// @access Private
const getAllUserHoroscope = async (req, res) => {
  return getAllData(UserHoroscope, res);
};

/**
 * Add a new user horoscope
 * @route POST /master/addData
 * @payload { value }
 * @response Created user horoscope object
 * @access Private
*/
const addNewUserHoroscope = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserHoroscope, addData);
}

/**
 * Update user horoscope
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user horoscope object
 * @access Private
*/
const updateUserHoroscope = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserHoroscope, id, updateUserData);
};

/**
 * Activate or deactivate user horoscope
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user horoscope object with activation status
 * @access Private
*/
const activateDeactivateHoroscope = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserHoroscope, id);
}

module.exports = {
  getAllUserHoroscope,
  updateUserHoroscope,
  activateDeactivateHoroscope,
  addNewUserHoroscope
};
