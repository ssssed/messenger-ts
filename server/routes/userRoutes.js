const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userControllers');

router.post('/login', UserController.login);
router.post('/registration', UserController.registration);
router.get('/check', UserController.check);
router.get('/user/:id', UserController.getUserInfoById);

module.exports = router;
