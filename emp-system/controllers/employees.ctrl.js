const express = require('express')
const employeeSvc = require('../services/employees.service')

const employeeCtrl ={
    register:async(request,response)=>{
       try{
         const employee = await employeeSvc.create(request.body)
            response.status(201)
            response.send({
                data:employee,
                message:'Employee created Successfully'
            })
       }catch(error){
        console.log(error)
        response.status(500).send({
            error:'Unable to create employee'
        })
       }
    },
    getOne:async(request,response)=>{
        try{
            const employee = await employeeSvc.getById(request.params.id)
            
                if (!employee) {
                    return response.status(404).send({
                        message: 'Employee not found'
                    });
                }

            response.status(200)
            response.send({
                data:employee,
                message:'Employee Retrived Successfully'
            })
        }catch(error){
        console.log(error)
        response.status(500).send({
            error:'Unable to Retrive  employee'
        })
       }
    },
    getAll:async(request,response)=>{
        try{
            const employees = await employeeSvc.getAll()
            response.status(200).send({
                data:employees,
                message:'Retrieve Employees Successfully'
            })

        }catch(error){
            response.status(500).send({
                message:'Unable to Retrive Employees'
            })
        }
    },
    remove:async(request,response)=>{
        try{
             await employeeSvc.deleteById(request.params.id)
            response.status(200).send({
                message:'removed Employee Successfully'
            })

        }catch(error){
            console.log(error)
            response.status(500).send({
                message:'Unable to remove Employees'
            })
        }
    },
    updateEmp:async(request,response)=>{
        try{
            const employee = await employeeSvc.updateById(request.params.id,request.body)
            if(!employee){
                return response.status(404).send({
                    error:'Employee Not found'
                })
            }
            response.send({
                data:employee,
                message:'Updated Employee Successfully'
            })
        }catch(error){
                console.error(error);
                response.status(500).send({
                    error:"unable to update the Employee"
                })
        }
    }
    
}
module.exports = employeeCtrl;