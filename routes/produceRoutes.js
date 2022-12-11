const router = require('express').Router();
const produceController = require('../controllers/produceController')

router
    .route('/')
    .get(produceController.index)
    .post(produceController.addPost)

router
    .route('/:id')
    .get(produceController.singleProducePost)
    .patch(produceController.editPost)
    .delete(produceController.deletePost)

module.exports = router;