const { UserCaste } = require("../../models/masterData/index");
const { getAllData } = require("../../services/index");

// @route GET /masters/casteData
// @payload <Empty>
// @response Array of all casteData
// @access Private
const getCasteData = async (req, res) => {
  return getAllData(UserCaste, res);
};

module.exports = { getCasteData };
