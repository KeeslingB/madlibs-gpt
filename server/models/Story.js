const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');


const storySchema = new Schema(
  {
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
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      }
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Story = model('Story', storySchema);

module.exports = Story;
