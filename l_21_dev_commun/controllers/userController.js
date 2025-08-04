const User = require("../models/userModel");


const registerUser = async(req,res) =>{ 
    const { firstName, lastName, emailId, password} = req.body;

    // VALIDATION

    if (!firstName || !lastName || !emailId || !password){
        res.status(400).send({message:"Please Add all Fields"})
    }

    const user = new User({
        "firstName": "Pransh",
        "lastName": "Maurya",
        "emailId": "pransh@gmail.com",
        "password": "Pransh@123"
    })

    await user.save();


}

module.exports = registerUser;

// const loginUser = () =>{

// }