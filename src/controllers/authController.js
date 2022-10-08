// Here the Controllers for the aunthentication routes are set up

const registerUser = async (req,res) => {
    res.send('Register User route')
}

const loginUser = async (req,res) => {
    res.send('Login User route')
}

module.exports = {
    registerUser,
    loginUser
}