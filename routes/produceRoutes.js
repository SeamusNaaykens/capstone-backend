const router = require('express').Router();
const produceController = require('../controllers/produceController')

router
    .route('/')
    .get(produceController.index)
    // .post(produceController.addProduceItem)

router
    .route('/:id')
    .get(produceController.singleProducePost)
    // .patch(produceController.editPost)
    .delete(produceController.deletePost)

    

module.exports = router;