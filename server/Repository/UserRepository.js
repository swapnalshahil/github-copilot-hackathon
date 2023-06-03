const Users = require("../Schemas/UserSchema");

const createNewUser = async (details) => {
    const user = new Users();
    Object.entries(details).forEach(([key, value]) => {
        if (key in user) {
          user[key] = value;
        }
      });
    await user.save();
    return user;
};  
const findUserById = async (id) => {
  return await Users.findById(id);
};
const findUserByEmail = async (email) => {
  return await Users.findOne({ email: email });
};
const getAllUsers = async () => {
  return await Users.find();
};
const getUserTransactions = async (id) => {
  return await Users.findById(id)
    .populate("transactions")
    .select("transactions");
};
const updateUserDetails = async (user, details) => {
  Object.entries(details).forEach(([key, value]) => {
    if (key in user) {
      user[key] = value;
    }
  });
  await user.save();
  return user;
};

exports.createNewUser = createNewUser;
exports.findUserById = findUserById;
exports.findUserByEmail = findUserByEmail;
exports.getAllUsers = getAllUsers;
exports.getUserTransactions = getUserTransactions;
exports.updateUserDetails = updateUserDetails;
