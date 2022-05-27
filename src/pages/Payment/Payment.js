import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`
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

                        </div>
                    </div>

                </div>
        
    );
};

export default Payment;