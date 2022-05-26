import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../assets/Na_Nov_26.jpg'

const NotFound = () => {
    return (
        <div className="mt-10 w-fit lg:w-2/3">
            <div className='lg:flex justify-center items-center'>
                <img className='lg:ml-20' src={notfound} alt="" />
                <div className='btn btn-primary hover:bg-blue-400 ml-40'>
                    <Link to='/home'>Go to home </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;