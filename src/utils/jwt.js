const jwt = require("jsonwebtoken");
const signAccess = (payload) => jwt.sign(
    payload, 
    process.env.JWT_SECRET,
    {
        "expiresIn": "15m"
    }
);

module.exports = { signAccess };