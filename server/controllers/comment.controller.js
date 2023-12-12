const { Story } = require('../models');
const { Comment } = require('../models/Comment')
const ObjectId = require('mongoose').Types;


// finding comments
async function getAllComments(req, res) {
    try {
        console.log('Every comment.')
        const allComments = await Comment.findAll({}).select('__v');
        // the select statement above tells mongoose to find the current/most current version in the array, instead of just the position in the array. 
        res.json(allComments);
        console.log('Found the comments')
    } catch (err) {
        res.status(500).json(err.message);
    }
};

async function getCommentsByStory(req, res) {
    try {
        const storyComments = await Comment.findAll({ story: req.params.story });

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
        const oneComment = await Comment.findOne({ _id: req.params.ObjectId }).select('__v');
        if (!oneComment) {
            return res.status(404).json({ message: 'No such comment' })
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

// make a comment
async function writeComment(req, res) {
    try {
        console.log('Trying to write')
        const newComment = await Comment.create(req.body);
        const itsStory = await Story.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { _id: newComment._id } },
            { $push: { commenterName: newComment.commenterName } },
            { $push: { commentText: newComment.commentText } },
            { new: true }
        );
        if (!itsStory) {
            return res.status(404).json({ message: 'No story with that ID' });
        };
        res.json(newComment);

    } catch (err) {
        res.status(500).json(err);
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