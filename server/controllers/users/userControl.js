
// Register
const registerUser = async (req, res) => {
  const {email, firstName, lastName, password} = req?.body;

  try {
    // logic to check if user exists then throw error
    // else do registeration
    console.log("registeruser")
    const userExist = User.findOne({email})
    if(userExist) {
      throw new Error("User already exists")
    }
    const user = await User.create({email, firstName, lastName, password})
    console.log(user)
    res.status(200).json(user)

  } catch (error) {
    // throw error
    console.log("error")
    res.json(error)
  }
};

module.exports = {registerUser}