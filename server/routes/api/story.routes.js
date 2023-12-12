const router = require('express').Router();
require("dotenv").config();

const {
  getStorys,
  getSingleStory,
  createStory,
  deleteStory
} = require('../../controllers/story.controller');
router
  .route("/").get(getStorys)


router
  .route("/:id").post(createStory)

router
  .route("/:storyId").get(getSingleStory)

router
  .route('/:storyId/:userId/:storyId').delete(deleteStory)

module.exports = router;