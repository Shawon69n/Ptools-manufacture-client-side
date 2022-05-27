import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = ({data}) => {
    const Swal = require('sweetalert2')
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('');
    const [clientSecret,setClientSecret] = useState('');
    const [success,setSuccess] = useState('');
    // const [transactionId,settransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    const {totalPrice,productName,email,_id} = data;


    useEffect(() =>{
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({totalPrice})
        })
        .then(res => res.json())
        .then(result => {
            if(result?.clientSecret){
                setClientSecret(result.clientSecret)
                
            }
        })
    },[totalPrice])




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

         // confirn card payment 
         const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: data?.productName,
                        email: data?.email
                    },
                },
            },
        );

        if(intentError){
            setCardError(intentError?.message)
            
        }
        else{
            setCardError('')
            Swal.fire({
                title: 'Success',
                text: 'Your Payment is complete.',
                imageUrl: 'https://c.tenor.com/8SgfKqD7twkAAAAC/vnu-yoohoo.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
      
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
            disabled={!stripe || !clientSecret}
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