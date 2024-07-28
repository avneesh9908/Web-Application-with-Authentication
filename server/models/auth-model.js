// const { Phone } = require("@material-ui/icons");

const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const Schema=mongoose.Schema;
const userSchema=new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        },
    isAdmin:{
            type: Boolean,
            default: false,

        },
    })


    userSchema.pre("save", async function(next){
        const user=this;
         if(!user.isModified("password")){
               next();

         }
          const salt=await bcrypt.genSalt(10);    //const salt=10;
         const hashPassword=await bcrypt.hash(user.password, salt);
         user.password=hashPassword;
         next();
            })

             userSchema.methods.generateToken= async function() {

              try {
                return jwt.sign(
                    {
                        userId: this._id.toString(),
                        email: this.email,
                        isAdmin: this.isAdmin,
                        },
                       process.env.JWT_SECTECT_KEY,
                       {
                        expiresIn: "7d",
                       }
                    );
                
              } catch (error) {
                res.status(500).send("error in generatetaken",error);
              }
               
             };

            userSchema.methods.isCorrectPassword=async function(password){
                const user=this;
                const correctPassword=await bcrypt.compare(password, user.password);
                return correctPassword;
                }

    const User=mongoose.model("User",userSchema);
    module.exports=User;
