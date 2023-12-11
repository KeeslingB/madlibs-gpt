const { Schema, model} = require('mongoose');

const commentSchema = new Schema({
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],  
    commentText: {
        type: String,
        required: true
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  })

  const Comment = model('Comment', commentSchema);
  module.exports = Comment;