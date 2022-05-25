import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import reviewImg from '../../assets/review.jpg'
const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imgStorageKey = "147d9a20e88f00ffb378d09769220704";

    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image',image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result?.data?.url;
                const reviewer = {
                    name : data.name,
                    address: data.address,
                    review: data.review,
                    rating: data.rating,
                    img: img
                }
             
                // sending review database 
                fetch('http://localhost:5000/reviews',{
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                    },
                    body: JSON.stringify(reviewer)
                })
                .then(res => res.json())
                .then(added => {
                    console.log('yohhoo');
                })

            }
        })
        
    };
    return (
        <div>
            <div class="hero  ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={reviewImg} class="max-w-sm rounded-lg  shadow-2xl" alt='' />
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                        <input  value={user?.displayName} class="w-96 input input-bordered shadow-2xl" {...register("name")} />
                        <input type="text" placeholder='Your location' class="w-96 input input-bordered shadow-2xl mt-2" {...register("address", { required: true })} required/>
                        <textarea placeholder='Write your review' className='textarea input-bordered shadow-2xl mt-2' {...register("review", { required: true })} />

                        <input type="file"  class="w-96 input input-bordered shadow-2xl mt-2 p-2" {...register("img")} required/>
                        <input placeholder='Ratings' type='number' class="w-96 input input-bordered shadow-2xl mt-2" {...register("rating")} required />
                        <input className='btn btn-primary mt-2' type="submit" value='Add review' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddReview;