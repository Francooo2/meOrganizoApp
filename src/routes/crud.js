const express = require('express')
const authController = require('../controllers/auth')
const taskController = require('../controllers/module')
const router = express.Router()

router.get('/tasks/:id', authController.isLoggedIn, taskController.getTasks, (req, res) => {
    if (req.messageError) {
        res.render('profile', {
            message: req.messageError
        })    
    } else {
        res.render('profile', {
            data: req.task,
            user: req.user
        })
    }
})

router.post('/create/:id', authController.isLoggedIn, taskController.createTask)

router.post('/updatestatusone/:id', authController.isLoggedIn, taskController.updateStatusOne)

router.post('/updatestatustwo/:id', authController.isLoggedIn, taskController.updateStatusTwo)

router.get('/updatetask/:id', authController.isLoggedIn, taskController.getUpdateTask, (req, res) => {
    res.render('updatetask', {
        data: req.task,
        user: req.user
    })
})

router.post('/updatetask/:id', authController.isLoggedIn, taskController.updateTask)

router.get('/delete/:id', authController.isLoggedIn, taskController.deleteTask)

module.exports = router;