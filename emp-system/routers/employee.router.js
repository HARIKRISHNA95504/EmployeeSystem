const express = require('express');
const router = express.Router();

const employeeCtrl = require('../controllers/employees.ctrl')

router.post('/',employeeCtrl.register) // register means create
router.get('/',employeeCtrl.getAll)
router.get('/:id',employeeCtrl.getOne)
router.delete('/:id',employeeCtrl.remove)
router.put('/:id',employeeCtrl.updateEmp)
module.exports = router