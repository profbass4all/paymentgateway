require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser')
const swaggerUI = require('swagger-ui-express')
const swaggerJson = require('./paymentopenapi.json')
const PaymentRouter = require('./routes/payment.routes.js')
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.status(200).json({
    status: true,
    message: 'Welcome to the Payment Gateway API',
    });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', PaymentRouter)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));

