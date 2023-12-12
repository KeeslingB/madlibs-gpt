const { Story, User } = require('../models');
const ObjectId = require('mongoose').Types


module.exports = {
  async getStorys(req, res) {
    try {
      const storys = await Story.find({})
        .select('-__v');
      res.json(storys);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleStory(req, res) {
    try {
      const story = await Story.findOne({ _id: req.params.storyId })
        .select('-__v');

      if (!story) {
        return res.status(404).json({ message: 'No story with that ID' });
      }

      res.json(story);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new story
  async createStory(req, res) {
    try {
      const story = await Story.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { story: story._id }  },
        { $push: { story: story.title } },
        { $push: { story: story.story } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'story created, but found no user with that ID', payload: story });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteStory(req, res) {
    try {
      const story = await Story.findOneAndDelete({ _id: req.params.storyId });

      if (!story) {
        return res.status(404).json({ message: 'No such story exists' });
      }

      const user = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $pull: { storys: req.params.storyId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'story deleted, but no users found',
        });
      }

      res.json({ message: 'story successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
