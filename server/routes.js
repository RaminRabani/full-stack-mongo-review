const express = require('express');
const router = express.Router();
// const controller = require('./controller.js');


router.route("/groceryList")
  .get(controller.get)
  .post(controller.post)
  .put(controller.put)

  module.exports = router;