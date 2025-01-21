const {initializeTransaction, verifyTransaction, getTransaction }=  require("../paystackAPI.js")

const makePaymentRequest = async (req, res)=>{

    try {
        const { name, email, amount } = req.body

        if( !email || !amount || !name){
            throw new Error('All fields are required')
        }

        const transaction =await initializeTransaction( email, amount)
        console.log(transaction)
        if(transaction == null){
            throw new Error('Failed to initialize payment request')
        }
        //the reference needs to be saved in the databse so that the user won't use it again
        res.status(200).json({
            status: true,
            message: 'Payment request initialized',
            data: {
                reference: transaction.data.reference,
                authorization_url: transaction.data.authorization_url,
                customer_email: email,
                customer_name: name,
                amount: amount
            }
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

const verifyPayment = async (req, res)=>{
    
    try {
        const { reference, amount }  = req.body
        
        if(!reference){
            throw new Error('Payment reference is required')
        }
        
        const transaction = await verifyTransaction(reference)
        // console.log(transaction)
        if(transaction == null){
            throw new Error('Failed to verify payment')
        }
        if( transaction.amount !==  Number(amount) ){
            throw new Error('Payment amount does not match')
        }

        if(!transaction.status || !transaction.transaction_status){
            throw new Error('Payment failed')
        }
        //confirm if the reference has already been used in a previous transaction
    

        //feel free to deliver service to the user because the user has paid fully....say cheese

        res.status(200).json({
            status: true,
            message: 'Payment verified',
            data: transaction
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

async function getPaymentDetails(req, res){

    try {
        const { id } = req.params

        if(!id){
            throw new Error('Payment ID is required')
        }

        const transaction = await getTransaction(id)
        
        if(transaction == null){
            throw new Error('Failed to get payment details')
        }

        if(transaction.transaction_status !== 'success' || !transaction.status ){
            throw new Error('Payment failed or is not yet completed') 
        }

        res.status(200).json({
            status: true,
            message: 'Payment details retrieved',
            data: transaction
        })
    } catch (error) {
        
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}


module.exports = {
    makePaymentRequest,
    verifyPayment,
    getPaymentDetails
}