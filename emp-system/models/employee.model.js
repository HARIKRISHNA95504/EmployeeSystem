
const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
  name: {
    type:String,
    default:null
  },
  email:{
    type:String,
    default:null
  },
  phone:{
    type:String,
    default:null
  },
  department:{
    type: String,
    default:null
  },
  position:{
    type:String,
    default:null
  },
  salary:{
    type:Number,
    default:null
  },
  hireDate:{
    type:Date,
    default:null
  },
  status: {
    type: String,
    enum: ['Active', 'On Leave', 'Resigned'],
    default: 'Active'
  }
}, { timestamps: true });

const employeeModel= mongoose.model('employees', employeeSchema);
module.exports = employeeModel;