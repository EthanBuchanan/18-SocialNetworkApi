const { Schema, Types, model } = require('mongoose');
//const { schema } = require('./Student');
const Thoughts = require("./Thought");
//const Friends = require("./Thought");

const userSchema = new Schema(
  {
    thoughts: [Thoughts],
    friends: [this],
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true

    },
    email: {
      type: String,
      required: true,
      unique: true
    },
   


    /*
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    assignmentName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: 'Unnamed assignment',
    },
    score: {
      type: Number,
      required: true,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    */
  },

  {
    toJSON: {
      getters: true,
    },
  }

);

userSchema.virtual("friendCount").get(function(value, virtual, doc) {
  return this.friends.length;
  })

module.exports = model("User", userSchema)
