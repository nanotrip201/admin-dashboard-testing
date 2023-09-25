const { UserOccupation } = require("../../models/masterData/index");
const { getAllData } = require("../../services/index");

// @route GET /masters/occupationData
// @payload <Empty>
// @response Array of all occupationData
// @access Private
const getOccupationData = async (req, res) => {
  return getAllData(UserOccupation, res);
};

module.exports = { getOccupationData };
