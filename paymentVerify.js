// const  { verifyPayment } = require('./controllers/payments.js')
// const { verifyTransaction }=  require("./paystackAPI.js")

// jest.mock("./paystackAPI.js")

// const req = {
//     body: { 
//         reference: '86xo568k4d',
//         amount: 100000
//     }
// }
// const res = {
//     status: jest.fn().mockReturnThis(),
//     json: jest.fn()
// }
// it('verify payment with paystackapi', async ()=>{
    
//     verifyTransaction.mockResolvedValue(
//         {
//   status: true,
//   message: 'Verification successful',
//   data: {
//     id: 4604514662,
//     domain: 'test',
//     status: 'success',
//     reference: 'ttj3fur0je',
//     receipt_number: null,
//     amount: 1000000,
//     message: null,
//     gateway_response: 'Successful',
//     paid_at: '2025-01-20T17:27:39.000Z',
//     created_at: '2025-01-20T16:42:14.000Z',
//     channel: 'card',
//     currency: 'NGN',
//     ip_address: '102.88.110.72',
//     metadata: '',
//     log: {
//       start_time: 1737394052,
//       time_spent: 9,
//       attempts: 1,
//       authentication: 'vault otp',
//       errors: 0,
//       success: true,
//       mobile: false,
//       input: [],
//       history: [Array]
//     },
//     fees: 25000,
//     fees_split: null,
//     authorization: {
//       authorization_code: 'AUTH_lh4afjp8t9',
//       bin: '408408',
//       last4: '4081',
//       exp_month: '12',
//       exp_year: '2030',
//       channel: 'card',
//       card_type: 'visa ',
//       bank: 'TEST BANK',
//       country_code: 'NG',
//       brand: 'visa',
//       reusable: true,
//       signature: 'SIG_P5Y2jQDkIp0EBITWj88q',
//       account_name: null
//     },
//     customer: {
//       id: 184550636,
//       first_name: null,
//       last_name: null,
//       email: 'ab@gmail.com',
//       customer_code: 'CUS_rg22ffa7xnfy6nb',
//       phone: null,
//       metadata: null,
//       risk_action: 'default',
//       international_format_phone: null
//     },
//     plan: null,
//     split: {},
//     order_id: null,
//     paidAt: '2025-01-20T17:27:39.000Z',
//     createdAt: '2025-01-20T16:42:14.000Z',
//     requested_amount: 1000000,
//     pos_transaction_data: null,
//     source: null,
//     fees_breakdown: null,
//     connect: null,
//     transaction_date: '2025-01-20T16:42:14.000Z',        
//     plan_object: {},
//     subaccount: {}
//   }
// }

//     )

//     await verifyPayment(req, res)

//     expect(verifyTransaction).toHaveBeenCalledWith(req.body.reference)
//     expect(res.status).toHaveBeenCalledWith(200)
//     expect(res.json).toHaveBeenCalledWith({
//             status: true,
//             message: 'Payment verified',
//             data: {
//   status: true,
//   message: 'Verification successful',
//   data: {
//     id: 4604514662,
//     domain: 'test',
//     status: 'success',
//     reference: 'ttj3fur0je',
//     receipt_number: null,
//     amount: 1000000,
//     message: null,
//     gateway_response: 'Successful',
//     paid_at: '2025-01-20T17:27:39.000Z',
//     created_at: '2025-01-20T16:42:14.000Z',
//     channel: 'card',
//     currency: 'NGN',
//     ip_address: '102.88.110.72',
//     metadata: '',
//     log: {
//       start_time: 1737394052,
//       time_spent: 9,
//       attempts: 1,
//       authentication: 'vault otp',
//       errors: 0,
//       success: true,
//       mobile: false,
//       input: [],
//       history: [Array]
//     },
//     fees: 25000,
//     fees_split: null,
//     authorization: {
//       authorization_code: 'AUTH_lh4afjp8t9',
//       bin: '408408',
//       last4: '4081',
//       exp_month: '12',
//       exp_year: '2030',
//       channel: 'card',
//       card_type: 'visa ',
//       bank: 'TEST BANK',
//       country_code: 'NG',
//       brand: 'visa',
//       reusable: true,
//       signature: 'SIG_P5Y2jQDkIp0EBITWj88q',
//       account_name: null
//     },
//     customer: {
//       id: 184550636,
//       first_name: null,
//       last_name: null,
//       email: 'ab@gmail.com',
//       customer_code: 'CUS_rg22ffa7xnfy6nb',
//       phone: null,
//       metadata: null,
//       risk_action: 'default',
//       international_format_phone: null
//     },
//     plan: null,
//     split: {},
//     order_id: null,
//     paidAt: '2025-01-20T17:27:39.000Z',
//     createdAt: '2025-01-20T16:42:14.000Z',
//     requested_amount: 1000000,
//     pos_transaction_data: null,
//     source: null,
//     fees_breakdown: null,
//     connect: null,
//     transaction_date: '2025-01-20T16:42:14.000Z',        
//     plan_object: {},
//     subaccount: {}
//   }
// }

//         })
// })

