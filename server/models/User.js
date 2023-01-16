import mongoose from "mongoose";

const userShema= new mongoose.userShema({
   name:{type:String},
   password:{type:String}
})

export default mongoose.Schema('User',userShema)