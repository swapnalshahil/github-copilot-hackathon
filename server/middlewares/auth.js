const jwt = require('jsonwebtoken')
const isAuthenticated = ( req, res, next ) => {
    const jwtSecret = process.env.JWT_SECRET;
    const token = req.header('Authorization')
    try{
        const email = jwt.verify(token, jwtSecret);
        req.user = {
            email
        }
        next();
    }
    catch (e) {
        res.status(401).send({message: "Access Denied"});
    }
}

module.exports = {
    isAuthenticated
}