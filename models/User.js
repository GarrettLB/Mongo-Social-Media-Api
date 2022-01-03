const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    thoughts: {

    },
    friends: {

    }
  }
);

const User = model('user', userSchema);

module.exports = User