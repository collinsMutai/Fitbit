const express = require("express");
const router = express.Router();
const ShopController = require("../Controllers/Shop")

router.post("/signup", ShopController.SignUpUser);
router.post("/login", ShopController.LoginUser);

module.exports = router
