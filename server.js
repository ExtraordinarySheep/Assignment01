const express = require('./config/express');
const bodyParser = require('body-parser');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});


module.exports = app;
