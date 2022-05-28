import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
const MyProfile = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    const { data: profile, isLoading, refetch } = useQuery('users', () => fetch(`https://fathomless-wave-90975.herokuapp.com/myprofile?email=${user?.email}`)
        .then(res => res.json()))





    return (

        <div class="card lg:ml-80 w-96 mt-20 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        {profile ? <img src={profile?.img} alt='' /> : <img src='' alt=''></img>}
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                {profile ? <h2 class="card-title">{profile?.name}</h2> : <h2 class="card-title"> </h2>}
                {profile ? <p className='mb-5'>Email : {user?.email}</p> : <p className='mb-5'>Email : </p>}
                {profile ? <p className='mb-2'>Address : {profile?.address}</p> : <p className='mb-2'>Address : </p>}
                {profile ? <p className='mb-2'>Education : {profile?.education} </p> : <p className='mb-2'>Education : </p>}
                {profile ? <p className='mb-10'>LinkedIn Id :  <a className='border-b-2 border-black' href={profile?.linkedid}>Profile link</a></p> : <p className='mb-10'>LinkedIn Id :  <a className='border-b-2 border-black' href={profile?.linkedid}>Profile link</a></p>}
                <div class="card-actions flex">
                    <button onClick={logout} class="btn btn-sm btn-primary btn-outline">Log out</button>
                    <p>Edit profile :</p>
                    <p className='mt-1'><Link to='/dashboard/updateprofile'><span className='text-base'><FaEdit></FaEdit></span></Link></p>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;