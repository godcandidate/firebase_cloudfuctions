// routes.js
const express = require('express');
const router = express.Router();
const { createUser } = require('../controller/controllers');

router.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

// User routes
router.post("/create", createUser);

module.exports = router;
