const express = require('express');
const router = express.Router();
const cors = require('cors');
const authController = require('../controllers/authControllers');

router.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_ROUTE
    })
)

router.get('/test', authController.test);
router.post('/', authController.loginUser);
router.post('/register', authController.registerUser);
router.get('/logout',authController.logoutUser);
router.get('/profile', authController.timeValidate);
router.get('/userDetails', authController.userDetails);

module.exports = router;