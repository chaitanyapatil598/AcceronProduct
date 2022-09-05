const express = require ( "express");
const app = express()
app.use(express.json());

// import routes

const product = require('./routes/productRoutes');
const memberInfo = require('./routes/MemberInfoRoutes');

//require Product 
app.use('/api/v1',product)
//require Member info
app.use('/api/v1',memberInfo)
module.exports = app