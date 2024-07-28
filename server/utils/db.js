const mongoose= require('mongoose');
const URI=process.env.MONGODB_URI;

const connectDb= async()=>{
   try {
          await mongoose.connect(URI);
          console.log("database connect successfully");
   } catch (error) {
    console.log("dabase connection filed",error);
    process.exit(0);
   }
   
};

module.exports=connectDb;

