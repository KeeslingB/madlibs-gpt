const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    //   user: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: 'User',
    //     }
    //   ], 
    // also, if we WERE using the user in the comment Schema, should it actually be an array? There's only one user per comment, after all.
    story: {
        type: Schema.Types.ObjectId,
        ref: 'Story',
        required: true
    },
    commenterName: {
        type: String,
        required: true
    },
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