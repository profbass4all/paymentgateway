require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser')
const PaymentRouter = require('../routes/payment.routes.js')
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', PaymentRouter)