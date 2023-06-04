const jwt = require('jsonwebtoken')
const isAuthenticated = ( req, res, next ) => {
    const jwtSecret = process.env.JWT_SECRET;
    const token = req.header('Authorization')
    const email = jwt.verify(token, jwtSecret);
    if(email){
        req.user = {
            email
        }
        next();
    }
    else res.status(401).send({message: "Access Denied"});
}

module.exports = {
    isAuthenticated
}