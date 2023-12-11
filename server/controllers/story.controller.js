const { Story, User } = require('../models');


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
        { $addToSet: { story: story._id } },
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
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { story: { _id: req.params.id } } },
      );
      const story = await Story.findOneAndDelete({ _id: req.params.id });
      if (!story) {
        return res.status(404).json({ message: 'No such story exists' });
      }
      res.json({ message: user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
