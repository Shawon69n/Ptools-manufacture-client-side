import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import reviewImg from '../../assets/review.jpg'
const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const Swal = require('sweetalert2')
    const imgStorageKey = "147d9a20e88f00ffb378d09769220704";

    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result?.data?.url;
                    const reviewer = {
                        name: data.name,
                        address: data.address,
                        review: data.review,
                        rating: data.rating,
                        img: img
                    }

                    // sending review database 
                    fetch('http://localhost:5000/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(reviewer)
                    })
                        .then(res => res.json())
                        .then(added => {
                            Swal.fire({
                                icon: 'success',
                                text: 'Your review is published',
                              })
                              reset()
                        })

                }
            })

    };
    return (
        <div>
            <div>
                <h1 className='text-center mb-10 font-mono font-extrabold lg:text-2xl mt-10'>Give your precious review to us</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={reviewImg} className="max-w-sm rounded-lg  shadow-2xl" alt='' />
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                        <input value={user?.displayName} className="w-96 input input-bordered shadow-2xl" {...register("name")} />
                        <input type="text" placeholder='Your location' className="w-96 input input-bordered shadow-2xl mt-2" {...register("address", { required: true })} required />
                        <textarea placeholder='Write your review' className='textarea input-bordered shadow-2xl mt-2' {...register("review", { required: true })} />

                        <input type="file" className="w-96 input input-bordered shadow-2xl mt-2 p-2" {...register("img")} required />
                        <select className="select select-bordered select-sm mt-2" {...register("rating")} required >
                            <option disabled selected>Pick your rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <input className='btn btn-primary mt-2' type="submit" value='Add review' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddReview;