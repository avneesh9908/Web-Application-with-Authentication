const User=require("../models/auth-model");
const jwt= require("jsonwebtoken");

const home=async(req, res) =>{
    try {
            res.status(200).send("welcome to world best mern series");
    } catch (error) {
        console.log(error);
    }
};

const register=async(req, res)=>{
   try {
       const {username, email, password, phone}= req.body;
       const userExit=await User.findOne({email});
       if(userExit){
        return res.status(400).send("user already exist");
        }

        const user=new User({
            username,
             email, 
             password,
             phone
            });

        await user.save();
         console.log(user);

        res.status(200).send({msg:"Registration Successfully", 
            token: await user.generateToken(),
            userId: user._id.toString(),
        });
    
   } catch (error) {
        console.log("register error", error);
   }

}


const login= async(req, res)=>{
try {
    const{email, password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.status(400).send("user not found");
        }
        const isMatch=await user.isCorrectPassword(password);
        if(!isMatch){
            return res.status(400).send("password is incorrect");
            }
            res.status(200).send({msg:"login successfully",
                token: await user.generateToken(),
                userId: user._id.toString(),
                });
                } catch (error) {
                    console.log("login error", error);
                    }
                    }
module.exports={home, register, login};


