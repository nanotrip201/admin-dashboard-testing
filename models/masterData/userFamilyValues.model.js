const { createModel } = require("./createMasterData.model");
const additionalField = {
  value: {
    type: String,
    required: true,
  },
}
let UserFamilyValues = createModel("userfamilyvalues", additionalField);
module.exports = { UserFamilyValues };