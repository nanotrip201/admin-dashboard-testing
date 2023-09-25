const { UserBirthTime } = require("../../models/masterData/index");
const { getAllData , addNewData , updateData , activateDeactivateStatus} = require("../../services/index");


const getAllUserBirthTime = async (req, res) => {
  return getAllData(UserBirthTime, res);
}; 

const addNewUserBirthTime = async (req, res) => {
  const { value } =  req.body;

  const addData = { value: value }

  return addNewData(req, res, UserBirthTime, addData);
}

const updateUserBirthTime = async (req, res) => {
  const { id, value, orderNumber } = req.body;

  const updateUserData = { 
    value: value,
    orderNumber: orderNumber
  };
  return updateData(req, res, UserBirthTime, id, updateUserData);
};

  const activateDeactivateBirthTime = async (req, res) => {
    const { id } = req.body;
  
    return activateDeactivateStatus(req, res, UserBirthTime, id);
  }

module.exports = {
  getAllUserBirthTime , addNewUserBirthTime , updateUserBirthTime , activateDeactivateBirthTime
};