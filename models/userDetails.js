const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for userDetails
const userDetailsSchema = new Schema({
  //<Family details>
  profileCreatedBy: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  noOfBrotherUnmarried: {
    type: Number,
  },
  noOfBrotherMarried: {
    type: Number,
  },
  noOfSisterUnmarried: {
    type: Number,
  },
  noOfSisterMarried: {
    type: Number,
  },
  gotra: {
    type: String,
  },
  mamaSurname: {
    type: String,
  },
  familyType: {
    type: String,
  },
  familyValue: {
    type: String,
  },
  familyStatus: {
    type: String,
  },
  familyIncome: {
    type: String,
  },
  familyIncomeRangeFrom: {
    type: Number,
  },
  familyIncomeRangeTo: {
    type: Number,
  },
  nativePlace: {
    type: String,
  },

  family_location: {
    type: String,
  },

  grandfather_name: {
    type: String,
  },
  grandmother_name: {
    type: String,
  },

  //</Family details>

  //<education details>
  percentage: {
    type: Number,
  },
  qualification: {
    type: String,
  },
  specialization: {
    type: String,
  },
  instituteName: {
    type: String,
  },
  passingYear: {
    type: Number,
  },
  //</education details>

  //<personal details>
  age: {
    type: Number,
  },
  dob: {
    type: String,
  },
  address_1: {
    type: String,
  },
  landmark: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  country: {
    type: String,
  },

  //<Contact Details>
  alternate_mobile_number: {
    type: Number,
  },
  whom_to_contact: {
    type: String,
  },

  //</Contact Details>

  current_location: {
    type: String,
  },

  complexion: {
    type: String,
  },

  mother_tongue: {
    type: String,
  },

  dietary_references: {
    type: String,
  },

  drinking_habits: {
    type: String,
  },

  smoking_habits: {
    type: String,
  },

  disabilities: {
    type: String,
  },

  medical_related: {
    type: String,
  },

  marital: {
    type: String,
  },

  caste: {
    type: String,
  },

  about_us: {
    type: String,
  },

  about_hobbies: {
    type: String,
  },

  about_family: {
    type: String,
  },

  about_partner_preference: {
    type: String,
  },

  //height in CM
  height: {
    type: Number,
  },
  //weight in KG
  weight: {
    type: Number,
  },
  language: {
    type: Object,
  },
  horoscope: {
    type: String,
  },
  religion: {
    type: String,
  },

  //</personal details>

  //<carrer details / Professional Details>
  occupation: {
    type: String,
  },
  jobLocation: {
    type: String,
  },
  companyName: {
    type: String,
  },
  designation: {
    type: String,
  },
  income: {
    type: String,
  },
  //</carrer details / Professional Details>

  // <additional-data>
  blood_group: {
    type: String,
  },
  father_job: {
    type: String,
  },
  mother_job: {
    type: String,
  },
  pob: {
    type: String,
  },
  siblings: {
    type: Number,
  },
  chacha: {
    type: Array,
  },
  chachi: {
    type: Array,
  },
  mama: {
    type: Array,
  },
  mami: {
    type: Array,
  },
  brother: {
    type: Array,
  },
  sister: {
    type: Array,
  },
  cousins: {
    type: Array,
  },
  dada: {
    type: String,
  },
  dadi: {
    type: String,
  },
  nana: {
    type: String,
  },
  nani: {
    type: String,
  },
  // </additional-data>

  // <Social Profile Details>
  Facebook: {
    type: String,
  },
  Instagram: {
    type: String,
  },
  LinkedIn: {
    type: String,
  },
  // </ Social Profile Details>

  //<Birth Details>
  birth_Place: {
    type: String,
  },
  birth_date: {
    type: Date,
  },

  birth_time: {
    type: String,
  },
  manglik_or_not: {
    type: String,
  },

  horoscope_matching_required_or_not: {
    type: String,
  },
  //<Birth Details>

  profileImage: {
    type: String,
  },

  user_id: {
    type: Schema.Types.ObjectId,
    unique: true,
  },
  account_status: {
    type: String,
    default: "A",
  },
  inserted_by: {
    type: Schema.Types.ObjectId,
  },
  inserted_at: {
    type: Date,
    default: Date.now,
  },
  modified_by: {
    type: Schema.Types.ObjectId,
  },
  modified_at: {
    type: Date,
  },
  deleted_by: {
    type: Schema.Types.ObjectId,
  },
  deleted_at: {
    type: Date,
  },
});

let userDetails = mongoose.model("userDetails", userDetailsSchema);
module.exports = userDetails;
