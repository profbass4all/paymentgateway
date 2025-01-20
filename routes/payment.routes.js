const { Router } = require("express")
const router = Router()
const { makePaymentRequest, verifyPayment, getPaymentDetails } = require('../controllers/payments.js')


router.post('/payment', makePaymentRequest)

router.get('/payment', verifyPayment)

router.get('/payment/:id', getPaymentDetails)



module.exports =  router