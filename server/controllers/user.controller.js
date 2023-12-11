const { User } = require('../models');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const Model = User; 

  async function addStory(req, res) {
    try {
      const user = await Model.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { story: req.body } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async function deleteStory(req, res) {
    try {
      const user = await Model.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { story: { storyId: req.params.storyId } } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async function verifyUser(req){
    const cookie = req.cookies["auth-cookie"]
    if( !cookie ) return false 

    const isVerified = jwt.verify(cookie, process.env.JWT_SECRET)
    if( !isVerified ) return false 

    const user = await Model.findOne({ _id: isVerified.id })
    if( !user ) return false 

    return user
}


async function authenticate(data){
  let user 

  try {
    user = await Model.findOne({ email: data.email })
  } catch(err) {
    console.log(err)
    throw new Error(err)
  }

  if(!user) throw new Error("No user found")

  let userIsOk = false
  try {
    userIsOk = await bcrypt.compare( data.password, user.password )
  } catch(err){
    console.log(err)
    throw new Error(err)
  }

  if(!userIsOk) throw new Error("Could not login")
  return user;
}


async function getAllItems() {
  try {
    return await Model.find();
  } catch (err) {
    throw new Error(err)
  }
}

async function getItemById(id) {
  try {
    return await Model.findById(id);
  } catch (err) {
    throw new Error(err)
  }
}

// use this as our signup handler
async function createItem(data) {
  try {
    return await Model.create(data);
  } catch (err) {
    throw new Error(err)
  }
}

async function updateItemById(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
  } catch (err) {
    throw new Error(err)
  }
}


async function deleteItemById(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getAllUsers: getAllItems,
  getUserById: getItemById,
  createUser: createItem,
  updateUserById: updateItemById,
  deleteUserById: deleteItemById,
  authenticate,
  verifyUser,
  addStory,
  deleteStory
}
