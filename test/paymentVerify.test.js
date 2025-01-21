const  { verifyPayment } = require('../controllers/payments.js')
const { verifyTransaction }=  require("../paystackAPI.js")

jest.mock("../paystackAPI.js")

const req = {
    body: { 
        reference: '86xo568k4d',
        amount: 100000
    }
}
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}
it('verify payment with paystackapi', async ()=>{
    
    verifyTransaction.mockResolvedValue(

        {
            status: true,
            transaction_status: 'success',
            reference: 'leugc6rgng',
            amount: 100000 
        }

    )

    await verifyPayment(req, res)

    expect(verifyTransaction).toHaveBeenCalledWith(req.body.reference)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(

        {
        status: true,
        message: "Payment verified",
        data: {
            status: true,
            transaction_status: "success",
            reference: "leugc6rgng",
            amount: 100000
        }
}
    )
})

it('should handle verify transaction failure', async()=>{

    verifyTransaction.mockResolvedValue(null)

    await verifyPayment(req, res)

    expect(verifyTransaction).toHaveBeenCalledWith(req.body.reference)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
        status: false,
        message: 'Failed to verify payment'
    })

})
it('should return error if required field is missing', async () => {

    req.body.reference = null;

    await verifyPayment(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        status: false,
        message: 'Payment reference is required',
        });
    });
