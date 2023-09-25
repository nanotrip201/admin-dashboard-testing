const AdminUser = require("../models/adminUser.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/default.json");
const { isFieldPresentInRequest } = require("../util/helpers");

// Request => Response => "Message Structure"
let reqResMsg = {
  status: "success" | "error",
  message: "",
  data: {} | [],
}

/**
 * Check if required fields are present in the request body.
 * @param {Object} reqBody - The request body.
 * @param {string[]} requiredFields - Required field names.
 * @returns {string[]} Missing fields.
*/
function checkRequiredFields(reqBody, requiredFields) {
  const invalidFields = [];

  requiredFields.forEach((field) => {
    if (!isFieldPresentInRequest(reqBody, field)) {
      invalidFields.push(field);
    }
  });

  return invalidFields;
}

// Register User
/**
 * @route : POST /auth/register
 * @desc : Admin User Register
 * @payload : {
 *  "email": "sample@mail.com",
 *  "password": "sample"
 * }
 * @response : { "status", "message", "data": {} }
 *  
*/
const register = async (req, res) => {
  try {
    // Check if required fields are present in the request body.
    const requiredFields = ["email", "password"];
    const invalidFields = checkRequiredFields(req.body, requiredFields);
    if (invalidFields.length > 0) {
      reqResMsg = { status: "error", message: `Missing fields: ${invalidFields.join(", ")}`, data: {} };
      return res.status(409).send(reqResMsg);
    }
    
    // distructure
    const {email} = req.body;
    const password = await bcrypt.hash(req.body.password, 12);

    // Check if the provided email matches the email pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      reqResMsg = { status: "error", message: "Invalid email format", data: {} }
      return res.status(400).send(reqResMsg);
    }

    const userExist = await AdminUser.findOne({ email });

    // if "user exist" registration will stop here.
    if (userExist) {
      // Respond with a 409 Conflict status code
      reqResMsg = { status: "error", message: "User with same email id already exist", data: {} }
      return res.status(409).send(reqResMsg);
    } else {
      // else, save user details.
      const user = await new AdminUser({email: email, password: password}).save();

      if (!user) {
        reqResMsg = { status: "error", message: "No result found. Please try again later.", data: {} }
        return res.status(400).send(reqResMsg);
      }

      // "Registration Done" if needed, we can pass any data in data obj.
      reqResMsg = { status: "success", message: "Registration Done", data: { user } }
      return res.status(201).send(reqResMsg);
    }
  } catch (error) {
    if (error) {
      console.log("Registration error:", error);
      reqResMsg = { status: "error", message: "Something went wrong please try after sometimes!", data: {} }
      return res.status(500).send(reqResMsg);
    }
  }
}

// Login User
/**
 * @route : POST /auth/login
 * @desc : Admin User Login
 * @payload : {
 *  "email": "sample@mail.com",
 *  "password": "sample"
 * }
 * @response : { "status", "message", "data": { token, userId } }
 * 
*/
const login = async (req, res) => {
  try {
    // Check if required fields are present in the request body.
    const requiredFields = ["email", "password"];
    const invalidFields = checkRequiredFields(req.body, requiredFields);
    if (invalidFields.length > 0) {
      reqResMsg = { status: "error", message: `Missing fields: ${invalidFields.join(", ")}`, data: {} };
      return res.status(409).send(reqResMsg);
    }
    
    // distructure
    const { email, password } = req.body;

    // find user with email
    const user = await AdminUser.findOne({ email });

    if (!user) {
      reqResMsg = { status: "error", message: "No user exist. Please double-check your credentials.", data: {} }
      return res.status(401).send(reqResMsg);
    } else {
      // Verify password with user hash_password in db
      // .compare(realPassword, hashPassword)
      const comparePassword = await bcrypt.compare(password, user.password);

      if (comparePassword) {
        const token = jwt.sign(
            {userId: user._id}, 
            config.jwtSecret,
            {expiresIn: '1h'}
          );
        
        /* 
          Update admin user document with the new values:
            - Increment login_count and set is_logged_in to true
        */
        await AdminUser.updateOne(
          { _id: user.id },
          {
            $set: {
              is_logged_in: true,
              login_count: user.login_count + 1
            },
          }
        );
          
        reqResMsg = { status: "success", message: "Logged in", data: {token: token, userId: user._id} }
        return res.status(200).send(reqResMsg);
      } else {
        // if incorrect password. 
        reqResMsg = { status: "error", message: "Incorrect email or password.", data: {} }
        return res.status(401).send(reqResMsg);
      }
    }
  } catch (error) {
    if (error) {
      console.log("Login error:", error);
      reqResMsg = { status: "error", message: "Something went wrong please try after sometimes!", data: {} }
      return res.status(500).send(reqResMsg);
    }
  }
}

module.exports = { register, login };