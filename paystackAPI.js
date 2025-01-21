const initializeTransaction = async (email, amount) => {

    const url = process.env.INITIALIZE_PAYMENT
    const secretKey = process.env.SECRET_KEY

    const data = {
        email: email,
        amount: amount * 100
        //the above will convert the amount to naira because paystack accept in kobo
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${secretKey}`,
                "Content-Type": "application/json"
                },
            body: JSON.stringify(data)
            });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData
    } catch (error) {

        return null
    }
}

const verifyTransaction = async (reference) => {

    const url = `${process.env.VERIFY_PAYMENT}${reference}`
    const secretKey = process.env.SECRET_KEY

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${secretKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('data from verify function',data);
        return {
            status: data.status,
            transaction_status: data.data.status,
            reference: data.data.reference,
            amount: data.data.amount / 100 //converting to naira
        }
    } catch (error) {

        return null
    }
};

const getTransaction = async (id) => {

    const url = `${process.env.GET_TRANSACTION}${id}`
    const secretKey = process.env.SECRET_KEY

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${secretKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data
    } catch (error) {

        return null
    }
};

module.exports = {
    initializeTransaction,
    verifyTransaction,
    getTransaction
}

