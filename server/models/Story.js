const { Schema, model } = require('mongoose');

const storySchema = new Schema({
  story: {
    type: String,
    required: true,
  },
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Answer',
    },
  ],
});

const Story = model('Story', storySchema);
module.exports = Story;
