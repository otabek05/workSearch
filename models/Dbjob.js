const mongoose = require('mongoose');



const dbjobs = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: true,
      lowercase:true
    },
    info:{
      type:String,
      required:true,
      lowercase:true
    },
    responsibility:{
      type:String,
      required:true,
      lowercase:true
    },
    education:{
      type:String,
      required:true,
      lowercase:true
    },
    salary:{
      type:String,
      required:true,
      lowercase:true
    },
    contact:{
      type:String,
      required:true,
      lowercase:true
    },
    company:{
      type:String,
      required:true,
      lowercase:true
    }
  });


const dbjob =mongoose.model('Job', dbjobs)

module.exports=dbjob;