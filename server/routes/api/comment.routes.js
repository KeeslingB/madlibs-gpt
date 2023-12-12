const router = require('express').Router();
require("dotenv").config();

// functions
const { getAllComments, getCommentsByStory, getSingleComment, writeComment, editComment, deleteComment } = require('../../controllers/comment.controller');


// path definitions
router.route("/").get(getAllComments);
