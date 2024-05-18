// routes.js
const express = require('express');
const router = express.Router();
const { createUser, updateUser, getUser } = require('../controller/controllers');

router.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

// User routes
router.post("/create", createUser);
router.post("/update", updateUser);
router.get("/getUser", getUser);

module.exports = router;
