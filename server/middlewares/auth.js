const jwt = require('jsonwebtoken')
const isAuthenticated = ( req, res, next ) => {
    const jwtSecret = process.env.JWT_SECRET;
    const token = req.header('Authorization')
    if(jwt.verify(token, jwtSecret)){
        next();
    }
    res.status(401).send({message: "Access Denied"});
}

module.exports = {
    isAuthenticated
}