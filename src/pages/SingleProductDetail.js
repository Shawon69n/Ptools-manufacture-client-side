import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const SingleProductDetail = () => {
    const [quantityError, setQuantityError] = useState('')
    const [inputValue, setInputValue] = useState(0);
    const { id } = useParams();
    const { data: product, isLoading } = useQuery('products', () => fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const { name, price, details, image, availableQuantity, minimumQuantity, _id } = product;

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const orderedQuantity = event.target.orderedQuantity.value;

        // {orderedQuantity > minimumQuantity ? console.log('error') : console.log('success')}
        if (orderedQuantity < minimumQuantity) {
            setQuantityError(`You have to order atleast ${minimumQuantity}`)
        }
        else {
            console.log('sucess');
        }

    };

    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
                <img src={image} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='lg:ml-28'>
                    <h1 class="text-5xl font-bold">{name}</h1>
                    <p class="py-6 border-b-2 mb-5">{details}</p>

                    <div className='flex '>
                        <h2 className='text-lg mb-4'>Per piece price : <span className='font-bold'>${price}</span></h2>
                        <h2 className='mr-5 ml-10'> Available quantity : <span className="badge badge-outline">{availableQuantity}</span></h2>
                        <h2> Minimum Order quantity : <span className="badge badge-outline">{minimumQuantity}</span></h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label class="label">
                            <span class="label-text">Your order quantity</span>
                        </label>
                        <input name='orderedQuantity' value={inputValue} onChange={handleChange} class="input input-bordered input-sm w-44 input-info max-w-xs" type='number' required />

                        {inputValue < minimumQuantity ? <input disabled className='btn btn-primary btn-xl ml-10' type="submit" value='Place order' /> : <input className='btn btn-primary btn-xl ml-10' type="submit" value='Place order' />}

                    </form>
                    {quantityError && <p>{quantityError}</p>}


                </div>
            </div>
        </div>
    );
};

export default SingleProductDetail;