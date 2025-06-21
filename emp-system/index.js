const express = require('express')
const mongoose = require('mongoose')
const app = express()


const employeeRouter = require('./routers/employee.router')

app.use(express.json())
app.get('/',(request,response)=>{
    response.send('Welcome To Express App & Employee System')
})

app.use('/employees',employeeRouter)


app.listen(4000,()=>{
    console.log('Server is Up On Running!')
})
mongoose.connect('mongodb+srv://patimaharikrishnap:harikrishna@cluster1.unktcl7.mongodb.net/emp-system').then(()=>{
    console.log('connected to  DB Successfully!')
}).catch((error)=>{
    console.log(error)

})


