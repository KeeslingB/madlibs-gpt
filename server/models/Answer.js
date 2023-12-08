const { Schema, model } = require('mongoose');

const answerSchema = new Schema({
  noun1: {
    type: String,
    required: true,
  },
  noun2: {
    type: String,
    required: false,
  },
  noun3: {
    type: String,
    required: false,
  },
  adjective1: {
    type: String,
    required: true,
  },
  adjective2: {
    type: String,
    required: false,
  },
  adjective3: {
    type: String,
    required: false,
  },
  verb1: {
    type: String,
    required: true,
  },
  verb2: {
    type: String,
    required: false,
  },
  verb3: {
    type: String,
    required: false,
  },
  adverb1: {
    type: String,
    required: true,
  },
  adverb2: {
    type: String,
    required: false,
  },
  adverb3: {
    type: String,
    required: false,
  },
  name1: {
    type: String,
    required: true,
  },
  name2: {
    type: String,
    required: false,
  },
  name3: {
    type: String,
    required: false,
  },
  number1: {
    type: String,
    required: true,
  },
  number2: {
    type: String,
    required: false,
  },
  number3: {
    type: String,
    required: false,
  },
});

const Answer = model('Answer', answerSchema);
module.exports = Answer;