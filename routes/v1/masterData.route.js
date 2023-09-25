const express = require("express");
const auth = require("../../middleware/auth");
const {
  getAllUserFamilyTypes,
  updateUserFamilyTypes,
  activateDeactivateUserFamilyTypes,
  addNewUserFamilyTypes,
  getAllUserFamilyIncome,
  getAllUserBirthTime,
  addNewUserBirthTime,
  updateUserBirthTime,
  activateDeactivateBirthTime,
  getCasteData,
  getGenderData,
  updateUserGender,
  activateDeactivateUserGender,
  addNewUserGender,
  getOccupationData,
  getAllUserAge,
  getAllUserLanguage,
  updateUserLanguage,
  activateDeactivateLanguage,
  addNewUserLanguage,
  getAllUserCountry,
  getAllUserSpecialization,
  getAllUserMaritalStatus,
  getAllUserHoroscope,
  getAllUserAnnualIncome,
  addNewUserAnnualIncome,
  updateUserAnnualIncome,
  activateDeactivateUserAnnualIncome,
  getAllUserDietPreference,
  updateUserDietPreference,
  activateDeactivateDietPreference,
  addNewUserDietPreference,
  getAllUserOccupationCategory,
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
  updateUserOccupationCategory,
  activateDeactivateOccupationCategoryStatus,
  addNewUserOccupationCategory,
  addNewUserEducationCompletionYear,
  updateUserEducationCompletionYear,
  activateDeactivateUserEducationCompletionYear,
  addNewUserMaritalStatus,
  updateUserMaritalStatus,
  activateDeactivateMaritalStatus,
  addNewUserSpecialization,
  updateUserSpecialization,
  activateDeactivateSpecialization,
  addNewUserFamilyIncome,
  updateUserFamilyIncome,
  activateDeactivateFamilyIncome,
} = require("../../controllers/masterData/index");
const {
  addNewUserCountry,
  updateUserCountry,
  activateDeactivateCountry,
} = require("../../controllers/masterData/userCountry.controller");
const { addNewUserFamilyValues, updateUserFamilyValues, activateDeactivateFamilyValues } = require("../../controllers/masterData/userFamilyValues.controller");
const { addNewUserFamilyStatus, updateUserFamilyStatus, activateDeactivateFamilyStatus } = require("../../controllers/masterData/userFamilyStatus.controller");
const { addNewUserHoroscope, updateUserHoroscope, activateDeactivateHoroscope } = require("../../controllers/masterData/userHoroscope.controller");

const {
  addNewUserAge,
  updateUserAge,
  activateDeactivateAge,
} = require("../../controllers/masterData/userAge.controller");
const masterRouter = express.Router();

masterRouter.use(auth);

const routes = [
  { method: "get", path: "/occupationData", handler: getOccupationData },
  { method: "get", path: "/casteData", handler: getCasteData },
  { method: "get", path: "/genderData", handler: getGenderData },
  { method: "get", path: "/familyType", handler: getAllUserFamilyTypes },
  { method: "get", path: "/familyIncome", handler: getAllUserFamilyIncome },
  { method: "get", path: "/birthTime", handler: getAllUserBirthTime },
  { method: "get", path: "/ageData", handler: getAllUserAge },
  { method: "get", path: "/languageData", handler: getAllUserLanguage },
  { method: "get", path: "/countryData", handler: getAllUserCountry },
  { method: "get", path: "/annualIncome", handler: getAllUserAnnualIncome },
  { method: "get", path: "/dietPreference", handler: getAllUserDietPreference },
  {
    method: "get",
    path: "/occupationCategory",
    handler: getAllUserOccupationCategory,
  },
  { method: "get", path: "/specialization", handler: getAllUserSpecialization },
  { method: "get", path: "/maritalStatus", handler: getAllUserMaritalStatus },
  { method: "get", path: "/horoscope", handler: getAllUserHoroscope },
  { method: "get", path: "/height", handler: getAllUserHeight },
  { method: "get", path: "/motherTongue", handler: getAllUserMotherTongue },
  {
    method: "get",
    path: "/profileCreatedBy",
    handler: getAllUserProfileCreatedBy,
  },
  { method: "get", path: "/familyStatus", handler: getAllUserFamilyStatus },
  { method: "get", path: "/familyValues", handler: getAllUserFamilyValues },
  { method: "get", path: "/bloodGroup", handler: getAllUserBloodGroup },
  { method: "get", path: "/weight", handler: getAllUserWeight },
  {
    method: "get",
    path: "/educationcompletionyear",
    handler: getAllUserEducationCompletionYear,
  },
];

// Define routes using a loop
routes.forEach((route) => {
  masterRouter[route.method](route.path, route.handler);
});

/**
 * fieldName : controller Function
 *
 * Map of field names to controller functions.
 * When a field name is received in a req.body, this map is used to determine which controller function to call.
 * The field names should match the frontend payload for accurate routing.
 */
const fieldToControllerMap = {
  "add-weight": addNewUserWeight,
  "update-weight": updateUserWeight,
  "toggle-weight-status": activateDeactivateWeight,

  "add-diet-preference": addNewUserDietPreference,
  "update-diet-preference": updateUserDietPreference,
  "toggle-diet-preference-status": activateDeactivateDietPreference,

  "add-annual-income": addNewUserAnnualIncome,
  "update-annual-income": updateUserAnnualIncome,
  "toggle-annual-income-status": activateDeactivateUserAnnualIncome,

  "add-occupation-category": addNewUserOccupationCategory,
  "update-occupation-category": updateUserOccupationCategory,
  "toggle-occupation-category-status": activateDeactivateOccupationCategoryStatus,

  "add-education-completion-year": addNewUserEducationCompletionYear,
  "update-education-completion-year": updateUserEducationCompletionYear,
  "toggle-education-completion-year-status": activateDeactivateUserEducationCompletionYear,

  "add-occupation": "",
  "update-occupation": "",
  "toggle-occupation-status": "",

  "add-caste": "",
  "update-caste": "",
  "toggle-caste-status": "",

  "add-gender": addNewUserGender,
  "update-gender": updateUserGender,
  "toggle-gender-status": activateDeactivateUserGender,

  "add-age": addNewUserAge,
  "update-age": updateUserAge,
  "toggle-age-status": activateDeactivateAge,

  "add-country": addNewUserCountry,
  "update-country": updateUserCountry,
  "toggle-country-status": activateDeactivateCountry,

  "add-language": addNewUserLanguage,
  "update-language": updateUserLanguage,
  "toggle-language-status": activateDeactivateLanguage,

  "add-specialization": addNewUserSpecialization,
  "update-specialization": updateUserSpecialization,
  "toggle-specialization-status": activateDeactivateSpecialization,

  "add-marital-status": addNewUserMaritalStatus,
  "update-marital-status": updateUserMaritalStatus,
  "toggle-marital-status-status": activateDeactivateMaritalStatus,

  "add-horoscope": addNewUserHoroscope,
  "update-horoscope": updateUserHoroscope,
  "toggle-horoscope-status": activateDeactivateHoroscope,

  "add-family-type": addNewUserFamilyTypes,
  "update-family-type": updateUserFamilyTypes,
  "toggle-family-type-status": activateDeactivateUserFamilyTypes,

  "add-family-income": addNewUserFamilyIncome,
  "update-family-income": updateUserFamilyIncome,
  "toggle-family-income-status": activateDeactivateFamilyIncome,

  "add-birth-time": addNewUserBirthTime,
  "update-birth-time": updateUserBirthTime,
  "toggle-birth-time-status": activateDeactivateBirthTime,

  "add-height": addNewUserHeight,
  "update-height": updateUserHeight,
  "toggle-height-status": activateDeactivateHeight,

  "add-mother-tongue": addNewUserMotherTongue,
  "update-mother-tongue": updateUserMotherTongue,
  "toggle-mother-tongue-status": activateDeactivateMotherTongue,

  "add-profile-created-by": addNewUserProfileCreatedBy,
  "update-profile-created-by": updateUserProfileCreatedBy,
  "toggle-profile-created-by-status": activateDeactivateProfileCreatedBy,

  "add-family-values": addNewUserFamilyValues,
  "update-family-values": updateUserFamilyValues,
  "toggle-family-values-status": activateDeactivateFamilyValues,

  "add-family-status": addNewUserFamilyStatus,
  "update-family-status": updateUserFamilyStatus,
  "toggle-family-status-status": activateDeactivateFamilyStatus,

  "add-blood-group": addNewUserBloodGroup,
  "update-blood-group": updateUserBloodGroup,
  "toggle-blood-group-status": activateDeactivateBloodGroup,

  // Add more field mappings as needed...
};

// Define a common route handler for both POST and PUT requests
const handleDataRequest = (req, res) => {
  const { fieldName } = req.body;
  const controllerFunction = fieldToControllerMap[fieldName];
  if (controllerFunction) {
     controllerFunction(req, res);
  } else {
    res.status(400).json({ error: "Invalid fieldName" });
  }
};

// POST
masterRouter.post("/add-data", handleDataRequest);

// PUT
masterRouter.put("/update-data", handleDataRequest);

module.exports = masterRouter;