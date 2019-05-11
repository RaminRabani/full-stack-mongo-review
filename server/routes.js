const express = require('express');
const router = express.Router();
const controller = require('./controller.js');


router.route("/todoList")
  .get(controller.get)
  .post(controller.post)
  .patch(controller.patch)

  module.exports = router;