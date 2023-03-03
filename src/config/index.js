export const config = {
    'apiLink' : 'https://strangers-things.herokuapp.com/api',
    'cohort' : '2211-ftb-et-web-pt',   
}

// const jwt = require("jsonwebtoken")

// const jwtKey = "jwtkey";
// const jwtExpirySeconds = 300;

// const users = {
//     user1: "password1",
//     user2: "password2",
// }

// const signIn = (req, res) => {
//     //get credentials from json body
//     const { username, password } = req.body
//     if (!(username && !password) || users[username] !==password))
//     {
//         //return 401 error is username or password doens't exist, or if password does
//         //not match the password in our records
//         return res.status(401).end()
//     }

// //create a new token with the username in the playload and whhihch expires 300 seconds after issue
// const token = jwt.sign({ username }, jwtKey, {
//     algorithm: "HS256",
//     expiresIn: jwtExpirySeconds,
//     })
//     console.log("token", token);

//     //set the cookie as the the token string, wit a similar max age as the token
//     //hhere, the max age is in milliseconds, so we multiply by 1000
//     res.cookie("token", token { maxAge: jwtExpirySeconds * 1000})
//     res.end();
// }