const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.route('/')
    .get(usersController.index)
    .post(usersController.addUser)

router.route('/:id')
    .get(usersController.singleUser)
    .patch(usersController.editUser)
    .delete(usersController.deleteUser)

router.route('/:id/produce')
    .get(usersController.userPosts)

router.route('/login')
    .post(usersController.loginUser)

router.route('/current')
    .get(usersController.currentUser)

module.exports = router;