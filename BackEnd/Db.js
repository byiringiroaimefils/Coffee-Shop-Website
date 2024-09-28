const Mongoose = require("mongoose");
require("dotenv").config();
const { modelName } = require("./Models/Product");
const Db=Mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Db is connected");
  })
  .catch((err) => {
    console.log(err);
  });
  
  modelName.export=Db;
