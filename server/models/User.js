const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Not a Valid Email!'
    }

  },
  password: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  story: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Story',
    },
    {
      type: Schema.Types.String,
      ref: 'Story',
    },
    {
      type: Schema.Types.String,
      ref: 'Story',
    }
  ],
}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
},
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})


const User = model('User', userSchema);
module.exports = User;
