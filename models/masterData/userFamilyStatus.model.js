const { createModel } = require("./createMasterData.model");
const additionalField = {
  value: {
    type: String,
    required: true,
  },
}
let UserFamilyStatus = createModel("userfamilystatuses", additionalField);
module.exports = { UserFamilyStatus };