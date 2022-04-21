const req = require('express/lib/request');
const { Schema, Types } = require('mongoose');
const Reaction = require("./Reaction")


const userSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true
    },
    thoughtText: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    reactions: []


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

module.exports = userSchema;
