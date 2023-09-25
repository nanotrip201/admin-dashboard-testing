const {
  getAllUserFamilyTypes,
  updateUserFamilyTypes,
  addNewUserFamilyTypes,
  activateDeactivateUserFamilyTypes,
} = require("./userFamilyType.controller");
const { getAllUserFamilyIncome , addNewUserFamilyIncome , updateUserFamilyIncome , activateDeactivateFamilyIncome } = require("./userFamilyIncome.controller");
const { getAllUserBirthTime , addNewUserBirthTime , updateUserBirthTime , activateDeactivateBirthTime} = require("./userBirthTime.controller");
const { getCasteData } = require("./userCaste.controller");
const {
  getGenderData,
  updateUserGender,
  addNewUserGender,
  activateDeactivateUserGender,
} = require("./userGender.controller");
const { getOccupationData } = require("./userOccupation.controller");
const { getAllUserAge } = require("./userAge.controller");
const { 
  getAllUserLanguage,
  updateUserLanguage,
  activateDeactivateLanguage,
  addNewUserLanguage,
} = require("./userLanguage.controller");
const { getAllUserCountry } = require("./userCountry.controller");
const {
  getAllUserSpecialization,
  updateUserSpecialization,
  activateDeactivateSpecialization,
  addNewUserSpecialization,
} = require("./userSpecialization.controller");
const {
  getAllUserMaritalStatus,
  activateDeactivateMaritalStatus,
  updateUserMaritalStatus,
  addNewUserMaritalStatus,
} = require("./userMaritalStatus.controller");
const { getAllUserHoroscope } = require("./userHoroscope.controller");
const {
  getAllUserDietPreference,
  updateUserDietPreference,
  activateDeactivateDietPreference,
  addNewUserDietPreference,
} = require("./userDietPreference.controller");
const { getAllUserAnnualIncome,
  addNewUserAnnualIncome,
  updateUserAnnualIncome,
  activateDeactivateUserAnnualIncome } = require("./userAnnualIncome.controller");
const {
  getAllUserOccupationCategory,
  updateUserOccupationCategory,
  activateDeactivateOccupationCategoryStatus,
  addNewUserOccupationCategory
} = require("./userOccupationCategory.controller");
const { getAllUserHeight, updateUserHeight, activateDeactivateHeight, addNewUserHeight } = require("./userHeight.controller");
const { getAllUserMotherTongue, addNewUserMotherTongue, updateUserMotherTongue, activateDeactivateMotherTongue } = require("./userMotherTongue.controller");
const { getAllUserProfileCreatedBy,addNewUserProfileCreatedBy,updateUserProfileCreatedBy,activateDeactivateProfileCreatedBy} = require("./userProfileCreatedBy.controller");
const { getAllUserFamilyStatus } = require("./userFamilyStatus.controller");
const { getAllUserFamilyValues } = require("./userFamilyValues.controller");
const { getAllUserBloodGroup, updateUserBloodGroup, activateDeactivateBloodGroup, addNewUserBloodGroup } = require("./userBloodGroup.controller");
const {
  getAllUserWeight,
  updateUserWeight,
  activateDeactivateWeight,
  addNewUserWeight,
} = require("./userWeight.controller");
const {
  getAllUserEducationCompletionYear,
  addNewUserEducationCompletionYear,
  updateUserEducationCompletionYear,
  activateDeactivateUserEducationCompletionYear
} = require("./userEducationCompletionYear.controller");

module.exports = {
  getAllUserFamilyTypes,
  updateUserFamilyTypes,
  addNewUserFamilyTypes,
  activateDeactivateUserFamilyTypes,
  getAllUserFamilyIncome,
  addNewUserFamilyIncome,
  updateUserFamilyIncome,
  activateDeactivateFamilyIncome,
  getAllUserBirthTime,
  addNewUserBirthTime,
  updateUserBirthTime,
  activateDeactivateBirthTime,
  getCasteData,
  getGenderData,
  updateUserGender,
  addNewUserGender,
  activateDeactivateUserGender,
  getOccupationData,
  getAllUserAge,
  getAllUserLanguage,
  updateUserLanguage,
  activateDeactivateLanguage,
  addNewUserLanguage,
  getAllUserCountry,
  getAllUserSpecialization,
  updateUserSpecialization,
  activateDeactivateSpecialization,
  addNewUserSpecialization,
  getAllUserMaritalStatus,
  activateDeactivateMaritalStatus,
  updateUserMaritalStatus,
  addNewUserMaritalStatus,
  getAllUserHoroscope,
  getAllUserDietPreference,
  updateUserDietPreference,
  addNewUserDietPreference,
  activateDeactivateDietPreference,
  getAllUserAnnualIncome,
  addNewUserAnnualIncome,
  updateUserAnnualIncome,
  activateDeactivateUserAnnualIncome,
  getAllUserOccupationCategory,
  updateUserOccupationCategory,
  activateDeactivateOccupationCategoryStatus,
  addNewUserOccupationCategory,
  getAllUserHeight,
  updateUserHeight,
  activateDeactivateHeight,
  addNewUserHeight,
  getAllUserMotherTongue,
  addNewUserMotherTongue,
  updateUserMotherTongue,
  activateDeactivateMotherTongue,
  getAllUserProfileCreatedBy,
  addNewUserProfileCreatedBy,
  updateUserProfileCreatedBy,
  activateDeactivateProfileCreatedBy,
  getAllUserFamilyStatus,
  getAllUserFamilyValues,
  getAllUserBloodGroup,
  updateUserBloodGroup,
  activateDeactivateBloodGroup,
  addNewUserBloodGroup,
  getAllUserWeight,
  updateUserWeight,
  activateDeactivateWeight,
  addNewUserWeight,
  getAllUserEducationCompletionYear,
  addNewUserEducationCompletionYear,
  updateUserEducationCompletionYear,
  activateDeactivateUserEducationCompletionYear
};
