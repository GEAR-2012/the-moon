const dataObj = {
  links: require("../json data/links.json"),
  icons: require("../json data/icons.json"),
};

// @desc Provide Home page
// @path GET /
// @access Public
const getHomePage = (req, res) => {
  res.render("home", dataObj);
};

// @desc Provide Order page
// @path GET /order
// @access Public
const getOrderPage = (req, res) => {
  res.render("order", dataObj);
};

// @desc Provide Menu page
// @path GET /menu
// @access Public
const getMenuPage = (req, res) => {
  res.render("menu", dataObj);
};

// @desc Provide About page
// @path GET /about
// @access Public
const getAboutPage = (req, res) => {
  res.render("about", dataObj);
};

module.exports = {
  getHomePage,
  getOrderPage,
  getMenuPage,
  getAboutPage,
};
