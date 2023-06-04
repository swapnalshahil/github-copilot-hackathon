const jwt = require('jsonwebtoken');
const {createNewUser, findUserByEmail} = require('../../Repository/UserRepository')
// Register
const loginUser = async (req, res) => {
  const {email} = req?.body;
  try {
    // logic to check if user exists then throw error
    // else do registeration
    const jwtSecret = process.env.JWT_SECRET || 'secret'
    const userExist = findUserByEmail(email)
    if(!userExist) {
      createNewUser({email});
    }
    const token = jwt.sign({
     data: email,
     exp: Math.floor(Date.now() / 1000) + (60 * 60), // expires in 1 hour
    }, jwtSecret);
    
    res.status(200).json(token)

  } catch (error) {
    // throw error
    console.log(error)
    res.json(error)
  }
};

module.exports = {loginUser}