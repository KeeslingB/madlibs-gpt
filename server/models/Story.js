const { Schema, Types } = require('mongoose');
const Comment = require('./Comment')

const commentSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  commentText: {
      type: String,
      required: true
  }
})

const storySchema = new Schema(
  {
    storyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    title: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = storySchema;
