const { UserGender } = require("../../models/masterData/index");
const {
  getAllData,
  updateData,
  activateDeactivateStatus,
  addNewData,
} = require("../../services/index");

// @route GET /master/genderData
// @payload <Empty>
// @response Array of all genderData
// @access Private
const getGenderData = async (req, res) => {
  return getAllData(UserGender, res);
};

/**
 * Add a new user gender
 * @route POST /master/addData
 * @payload { value }
 * @response Created user gender object
 * @access Private
 */
const addNewUserGender = async (req, res) => {
  const { value } = req.body;

  const addData = { value: value };

  return addNewData(req, res, UserGender, addData);
};

/**
 * Update user diet preference
 * @route PUT /master/updateData
 * @payload { id, value, orderNumber }
 * @response Updated user gender object
 * @access Private
 */
const updateUserGender = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = {
    value: value,
    orderNumber: orderNumber,
  };

  return updateData(req, res, UserGender, id, updateUserData);
};

/**
 * Activate or deactivate user diet preference
 * @route PUT /master/updateData
 * @payload { id }
 * @response Updated user gender object with activation status
 * @access Private
 */
const activateDeactivateUserGender = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserGender, id);
};

module.exports = {
  getGenderData,
  addNewUserGender,
  updateUserGender,
  activateDeactivateUserGender,
};
