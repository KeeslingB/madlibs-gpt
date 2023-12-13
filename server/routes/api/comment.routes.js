const router = require('express').Router();
require("dotenv").config();

// functions
const { getAllComments, getCommentsByStory, getSingleComment, writeComment, editComment, deleteComment } = require('../../controllers/comment.controller');


// path definitions
router.route("/").get(getAllComments);
router.route("/:id").get(getSingleComment);
router.route("/all/:storyId").get(getCommentsByStory);


router.route("/:storyId").post(writeComment);
router.route("/:id").put(editComment);
router.route("/:id").delete(deleteComment);

module.exports = router;