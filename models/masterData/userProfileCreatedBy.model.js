const { createModel } = require("./createMasterData.model");


const additionalField = {
  value: {
    type: String,
    required: true,
  },
}

let UserProfileCreatedBy = createModel("userprofilecreatedbies", additionalField);

module.exports = { UserProfileCreatedBy };