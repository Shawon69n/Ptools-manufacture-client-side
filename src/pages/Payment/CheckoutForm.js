import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = ({data}) => {
    const Swal = require('sweetalert2')
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('');
    const [clientSecret,setClientSecret] = useState('');
    const [success,setSuccess] = useState('');
    const [transactionId,settransactionId] = useState('');
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
        setProcessing(true);

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
            settransactionId(paymentIntent.id);
            Swal.fire({
                title: 'Success',
                text: 'Your Payment is complete.',
                imageUrl: 'https://c.tenor.com/8SgfKqD7twkAAAAC/vnu-yoohoo.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })

            //   sending to batabase 
            const payment = {
                transactionId : paymentIntent.id,
                productId : _id
            }
              fetch(`http://localhost:5000/orders/${_id}`,{
                  method: 'PATCH',
                  headers:{
                      'content-type' : 'application/json',
                  },
                  body: JSON.stringify(payment)
              })
        }
      
    }

    return (
        <>
        <form className='mt-10' onSubmit={handleSubmit}>
            <CardElement className='input input-bordered border-zinc-900'
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
            <button className='btn  btn-primary hover:btn-info btn-wide ml-6 mt-10'
            disabled={!stripe || !clientSecret}
            type="submit">
                Pay
            </button>
        </form>
        {cardError && <p className='text-red-600'>{cardError}</p>}
        {success && <p className='text-green-600'>{success}</p>}
        {transactionId && <p className='text-orange-400'>Your Transaction ID : ${transactionId}</p>}
       </>
    );
};

export default CheckoutForm;