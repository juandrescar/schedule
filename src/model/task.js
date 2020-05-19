const mongoose = require('mongoose');
var moment = require('moment');
const {Schema} = mongoose;

const TaskSchema = Schema({
  title: {type: String, default: null, required: true},
  description: {type: String, default: null, required: false},
  status: {
    type: Boolean,
    default: false
  },
  slackChannel: Object,
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

TaskSchema.set('toObject', { virtuals: true })
TaskSchema.set('toJSON', { virtuals: true })

// Establecemos un campo virtual
TaskSchema.virtual('customDate')
.get(function(){
  // el valor devuelto será un string en formato 'yyyy-mm-dd'
  return moment(this.date).format('YYYY/MM/DD');
});
// .set(function(fecha) {
//   // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
//   // el valor recibido se almacenará en el campo fecha_nacimiento_iso de nuestro documento
//   this.date = new Date(fecha);
// })

  // .set(function(fecha) {
  //   // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
  //   // el valor recibido se almacenará en el campo fecha_nacimiento_iso de nuestro documento
  //   this.fecha_nacimiento_iso = new Date(fecha);
  // })



module.exports = mongoose.model('task', TaskSchema);