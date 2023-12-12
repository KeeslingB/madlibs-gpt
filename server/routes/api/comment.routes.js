const router = require('express').Router();
require("dotenv").config();

// functions
const { getAllComments } = require('../../controllers/comment.controller');


// path definitions
router.route("/").get(getAllComments);
