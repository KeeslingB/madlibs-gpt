const { Schema, Types } = require('mongoose');

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
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = storySchema;
