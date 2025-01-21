const  { makePaymentRequest } = require('../controllers/payments.js')
const { initializeTransaction }=  require("../paystackAPI.js")

jest.mock("../paystackAPI.js")

const req = {
    body: { 
        name: 'abass',
        email: 'ab@example.com',
        amount: 100000
    }
}
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}
it('initialize payment with paystackapi', async ()=>{
    
    initializeTransaction.mockResolvedValue(
        {
            status: true,
            message: 'Authorization URL created',    
            data: {
                authorization_url: 'https://checkout.paystack.com/6ibm7iabyngr6zb',
                access_code: '6ibm7iabyngr6zb',        
                reference: 'ttj3fur0je'
                }
        }
    )

    await makePaymentRequest(req, res)

    expect(initializeTransaction).toHaveBeenCalledWith(req.body.email, req.body.amount)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({
            status: true,
            message: 'Payment request initialized',
            data: {
                reference: "ttj3fur0je",
                authorization_url: "https://checkout.paystack.com/6ibm7iabyngr6zb",
                customer_email: "ab@example.com",
                customer_name: "abass",
                amount: 100000
                
            }
        })
})

it('should handle initialization failure', async () => {
    
    initializeTransaction.mockResolvedValue(null);

    await makePaymentRequest(req, res);

    expect(initializeTransaction).toHaveBeenCalledWith(req.body.email, req.body.amount);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        status: false,
        message: 'Failed to initialize payment request',
    });
});

it('should return error if required fields are missing', async () => {

    req.body.email = null;

    await makePaymentRequest(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        status: false,
        message: 'All fields are required',
        });
    });

    
