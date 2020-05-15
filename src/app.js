const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//conect to db
mongoose.connect('mongodb://localhost/crud-example')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

const indexRoutes = require('./routes/index.js')

//settings
app.set('port', process.env.PORT || 9000);
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

//middlewares

app.set('secretKey', 'nodeRestApi');
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//routes
app.use('/api', indexRoutes);

app.listen(app.get('port'), () => {
  console.log("server on port ", app.get('port'));
});