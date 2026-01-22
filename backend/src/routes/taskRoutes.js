const express = require('express');
const router = express.Router();
const {createTask ,getTask, updateTaskPUT, updatePatch} = require('../controllers/taskController');
const {protected} = require('../middleware/authMiddleware');
router.post('/createTask', protected,createTask);
router.get('/getTask/:id', protected,getTask);
router.put('/updateTask/:id', protected,updateTaskPUT);
router.patch('/updateTask/:id', protected,updatePatch);
module.exports = router;