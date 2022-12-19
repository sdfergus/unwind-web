const mongoose = require( 'mongoose' );

const usersSchema = new mongoose.Schema( {
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  }
} );

const User = mongoose.model( 'UsersInfo', usersSchema )

module.exports = User;