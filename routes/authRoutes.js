const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.post('/user/create', authController.create_post );
router.get('/user/create', authController.create_get)
router.get('/details/:id', authController.details)
router.get('/mypage', (req,res)=>{
    console.log(req.headers)
})

module.exports = router;