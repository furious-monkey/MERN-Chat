const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: String,
  googleId: String,
});

const Users = model('Users', userSchema);

module.exports = Users;
