import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                <input type="text"  value={user?.displayName} class="input input-bordered input-info w-full max-w-xs" {...register("Name")} />
                <textarea placeholder='Write your review' className='textarea textarea-info mt-2' {...register("review", { required: true })} />
                
                {errors.review && <span>Write a review first</span>}

                <input className='btn btn-primary mt-2' type="submit" />
            </form>
        </div>
    );
};

export default AddReview;