// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const feedsController = require('./feeds.controller')

router.post('/feeds', feedsController.saveFeed);
router.get('/feeds', feedsController.getAllFeed);
router.get('/feed/id', feedsController.getSingleFeed);
router.put('/feed/id', feedsController.updateFeed);
router.delete('/feed/id', feedsController.deleteFeed);

module.exports = router;
