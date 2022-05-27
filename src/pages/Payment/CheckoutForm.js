import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = ({data}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('');
    const [clientSecret,setClientSecret] = useState('');
    const [success,setSuccess] = useState('');
    // const [transactionId,settransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    const {price,patient,email,_id} = data;






    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '' )
        setSuccess('');
        // setProcessing(true);

       
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-success btn-sm mt-4'
            // disabled={!stripe || !clientSecret}
            type="submit">
                Pay
            </button>
        </form>
        {cardError && <p className='text-red-600'>{cardError}</p>}
        {success && <p className='text-green-600'>{success}</p>}
        {/* {transactionId && <p className='text-orange-700'>Your Transaction id : {transactionId}</p>} */}
       </>
    );
};

export default CheckoutForm;