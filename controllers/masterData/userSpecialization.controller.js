const { UserSpecialization } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

// @route GET /master/specialization
// @payload <Empty>
// @response Array of all specialization
// @access Private
const getAllUserSpecialization = async (req, res) => {
  return getAllData(UserSpecialization, res);
};

/**
 * Add a new user specialization
 * @route POST /master/add-data
 * @payload { value }
 * @response Created user specialization object
 * @access Private
*/
const addNewUserSpecialization = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserSpecialization, addData);
}

/**
 * Update user specialization
 * @route PUT /master/update-data
 * @payload { id, value, orderNumber }
 * @response Updated user specialization object
 * @access Private
*/
const updateUserSpecialization = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };

  return updateData(req, res, UserSpecialization, id, updateUserData);
};

/**
 * Activate or deactivate user specialization
 * @route PUT /master/update-data
 * @payload { id }
 * @response Updated user specialization object with activation status
 * @access Private
*/
const activateDeactivateSpecialization = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserSpecialization, id);
}

module.exports = {
  getAllUserSpecialization,
  updateUserSpecialization,
  activateDeactivateSpecialization,
  addNewUserSpecialization
};