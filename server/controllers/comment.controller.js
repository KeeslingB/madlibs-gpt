const { Story, User } = require('../models');
const ObjectId = require('mongoose').Types;


// finding comments
async function getAllComments (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
};

async function getCommentsByStory (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
};

async function getSingleComment (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
};

// make a comment
async function writeComment (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
};

// update comment
async function editComment (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
};

// delete a comment
async function deleteComment (req, res) {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { getAllComments, getCommentsByStory, getSingleComment, writeComment, editComment, deleteComment }