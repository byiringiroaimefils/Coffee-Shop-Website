const mongoose =require ('mongoose');

const userSchema=new mongoose.Schema({
    username:{type:String,require:true,unique:true},
    email:{type:String,require:true,unique:true},
    password:{type:String}
})

const user=mongoose.model("users",userSchema);
module.exports=user;