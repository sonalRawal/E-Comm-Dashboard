const express = require("express");
const cors = require("cors");
var multer = require('multer') 
const router = require('./Route/route');
require("./db/config");

const app = express();

app.use(express.json());
app.use(cors());

app.use(multer().any()) 
app.use('/', router);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});