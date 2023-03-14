const express = require("express");
const { getHomePage, getOrderPage, getMenuPage, getAboutPage } = require("../controllers/mainController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/order", getOrderPage);
router.get("/menu", getMenuPage);
router.get("/about", getAboutPage);

module.exports = router;
