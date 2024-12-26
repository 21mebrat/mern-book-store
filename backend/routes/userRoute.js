const express = require('express')
const {
    registerUsers,
    login
} = require('../controllers/userController')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/register',auth, registerUsers)
router.post('/login', login)




module.exports = router