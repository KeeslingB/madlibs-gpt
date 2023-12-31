const { Story, Comment } = require('../models');
const ObjectId = require('mongoose').Types;



// finding comments
async function getAllComments(req, res) {
    try {
        console.log('Every comment.')
        const allComments = await Comment.find().select('__v');
        // the select statement above tells mongoose to find the current/most current version in the array, instead of just the position in the array. 
        res.json(allComments);
        console.log('Found the comments')
    } catch (err) {
        res.status(500).json(err.message);
    }
};

async function getCommentsByStory(req, res) {
    try {
        console.log("finding this story's comments")
        const storyComments = await Comment.find({ path: req.params.story });

        if (!storyComments) {
            return res.status(404).json({ message: 'No comments found' })
        };

        res.json(storyComments);
        console.log('All comments for this story')

    } catch (err) {
        res.status(500).json(err);
    }
};

async function getSingleComment(req, res) {
    try {
        console.log("Get one comment.")
        const oneComment = await Comment.findById({ _id: req.params.id });
        if (!oneComment) {
            return res.status(404).json({ message: 'No such comment' })
        }
        res.json(oneComment)
    } catch (err) {
        res.status(500).json(err);
    }
};

// make a comment
async function writeComment(req, res) {
    try {
        console.log('Trying to write')
        console.log(req.body)

        const comment = {...req.body, story: req.params.storyId }
        const newComment = await Comment.create(comment);

        const itsStory = await Story.findOneAndUpdate(
            { _id: req.params.storyId },
            { $push: { comments: newComment._id } },
            { $push: { comments: newComment.commenterName } },
            { $push: { comments: newComment.commentText } },
            { new: true }
        );
        if (!itsStory) {
            return res.status(404).json({ message: 'No story with that ID' });
        };
        res.json(newComment);

    } catch (err) {
        res.status(500).json(err.message);
    }
};

// update comment
async function editComment(req, res) {
    try {
        const revisedComment = await Comment.findOneAndUpdate({_id: req.params.id})
        res.json(revisedComment);
    } catch (err) {
        res.status(500).json(err);
    }
};

// delete a comment
async function deleteComment(req, res) {
    try {
        const revisedComment = await Comment.findOneAndDelete({_id: req.params.id})
        res.json({message: 'Comment deleted.'})
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { getAllComments, getCommentsByStory, getSingleComment, writeComment, editComment, deleteComment }