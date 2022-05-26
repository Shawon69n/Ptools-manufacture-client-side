import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const SingleProductDetail = () => {
    const {id} = useParams();
    const {data: details ,  isLoading} = useQuery('products' , () => fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json()))

            if(isLoading){
                return <Loading></Loading>
            }
            console.log(details);
    return (
        <div className='mt-56'>
            <h1>{id}</h1>
        </div>
    );
};

export default SingleProductDetail;