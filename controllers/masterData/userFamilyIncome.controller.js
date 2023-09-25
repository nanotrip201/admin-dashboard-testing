const { UserFamilyIncome } = require("../../models/masterData/index");
const { getAllData, updateData, activateDeactivateStatus, addNewData  } = require("../../services/index");

const getAllUserFamilyIncome = async (req, res) => {
  return getAllData(UserFamilyIncome, res);
}; 

const addNewUserFamilyIncome = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserFamilyIncome, addData);
}
 
const updateUserFamilyIncome = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  
  return updateData(req, res, UserFamilyIncome, id, updateUserData);
};

const activateDeactivateFamilyIncome = async (req, res) => {
  const { id } = req.body;

  return activateDeactivateStatus(req, res, UserFamilyIncome, id);
}

module.exports = {
  getAllUserFamilyIncome , addNewUserFamilyIncome , updateUserFamilyIncome , activateDeactivateFamilyIncome
};