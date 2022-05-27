import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleOnSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const email =user?.email;
        const address = e.target.address.value;
        const education = e.target.education.value;
        const linkedid = e.target.linkedid.value;
        const newProfile ={name,img,address,education,linkedid,email};
        
        fetch('http://localhost:5000/myprofile',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProfile)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('user updated')
            navigate('/dashboard/myprofile')
        })
    }

    return (
        <div class="card lg:ml-80 w-96 mt-20 bg-base-100 shadow-xl">
            <h1 className='text-center font-bold text-xl mt-5'>Update Profile info</h1>
            <div class="card-body items-center text-center">

                <form onSubmit={handleOnSubmit} action="">
                    <input type="text" name='name'  placeholder="Name" class="input input-bordered input-sm w-full max-w-xs mb-2" />
                    <input type="text" name='img' placeholder="Your Image url" class="input input-bordered input-sm w-full mb-2 max-w-xs" />
                    <input type="text" name='address' placeholder="Your address" class="input input-bordered input-sm w-full mb-2 max-w-xs" />
                    <input type="text" name='education' placeholder="Your educational status" class="input input-bordered mb-2 input-sm w-full max-w-xs" />
                    <input type="text" name='linkedid' placeholder="Your linked profile" class="input input-bordered mb-2 input-sm w-full max-w-xs" />
                    <input className='btn btn-outline btn-sm mt-2' type="submit" value='update' />
                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;