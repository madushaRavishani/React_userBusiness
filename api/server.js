const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
//const port= process.env.PORT || 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./DB.js');
const businessRoute =  require('./business.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
    useNewUrlParser: true}).then(() => {
        console.log('Database is connected')
},
    err=> {
        console.log('cannot connect to the database' + err)}
);


app.use(cors());
   
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business',businessRoute);

app.listen( port, () =>{
    console.log('Server is running on port :', port);
});








