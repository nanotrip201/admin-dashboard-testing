const existingUser = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page - 1) * limit;

    const lookupUser = {
      $lookup: {
        from: "userdetails",
        localField: "_id",
        foreignField: "user_id",
        as: "userDetails",
      },
    };

    const unwindUser = { $unwind: "$userDetails" };

    const usersWithCount = await existingUser.aggregate([
      lookupUser,
      unwindUser,
      {
        $facet: {
          users: [{ $skip: skip }, { $limit: limit }],
          totalCount: [{ $count: "count" }],
        },
      },
    ]);

    const users = usersWithCount[0].users;
    const totalCount = usersWithCount[0].totalCount[0].count;

    reqResMsg = {
      status: "success",
      message: "Users data retrieved.",
      data: { users, totalCount },
    };
    
    return res.status(201).send(reqResMsg);

  } catch (error) {
    console.log("Error fetching users:", error);
    reqResMsg = {
      status: "error",
      message: "Something went wrong please try after sometimes!",
      data: {},
    };
    return res.status(500).send(reqResMsg);
  }
};

module.exports = { getAllUsers };
