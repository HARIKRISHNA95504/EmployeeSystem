const { request, response } = require('express');
const employeeModel = require('../models/employee.model')

const employeeSvc = {
    create:async(data)=>{
        const employee = new employeeModel(data)
        return await employee.save()
    },
    getById: async(id)=>{
        return employeeModel.findById(id);
    },
    getAll:async()=>{
        return employeeModel.find()
    },
    deleteById: async(id)=>{
        return employeeModel.findByIdAndDelete(id)
    },
    updateById:async(id,data)=>{
        return employeeModel.findByIdAndUpdate(id,{$set:data},{new:true})
    }
}

module.exports = employeeSvc;