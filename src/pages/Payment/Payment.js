import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L40vaEoEFYp6wWrGsjtKLP5DUPngiZnWRjtUwfqIhhAB1PLvASWHB4yxYXrIzsMeVjmqOKGuLr0uoTWSp0jpDRn002NATxbTi');

const Payment = () => {
    const { id } = useParams();
    const url = `https://fathomless-wave-90975.herokuapp.com/orders/${id}`
    const { data, isLoading, refetch } = useQuery(['order', id], () => fetch(url, {
        method: "GET",
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:flex justify-center mt-28'>

            <div class="card w-72 mr-10 bg-base-100 shadow-xl">
                <figure><img src={data.image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: {data.productName}</h2>
                    <p>Ordered Quantity : {data.orderedQuantity}</p>
                    <p>Please pay :  ${data.totalPrice}</p>
                </div>
            </div>

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm  data={data} />
                    </Elements>
                </div>
            </div>

        </div>

    );
};

export default Payment;