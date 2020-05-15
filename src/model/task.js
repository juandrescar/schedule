const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = Schema({
  title: {type: String, default: null, required: true},
  description: {type: String, default: null, required: true},
  status: {
    type: Boolean,
    default: false
  },
  slackChannel: String,
  date: {type: Date, default: null, required: true},
  finalDate: {type: Date, default: null},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
});

TaskSchema.pre('findOneAndUpdate',  function (next) {
  const currentDate = new Date();
  this._update.updated_at = currentDate;
  next();
});

module.exports = mongoose.model('task', TaskSchema);