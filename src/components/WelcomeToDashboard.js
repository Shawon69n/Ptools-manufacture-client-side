import React from 'react';
import dasImg from '../assets/dashboardImg.jpg'
const WelcomeToDashboard = () => {
    return (
        <div>
            <h2 className='text-4xl text-center mt-10'>Welcome to dashboard</h2>
            <img className='ml-56' src={dasImg} alt="" />
        </div>
    );
};

export default WelcomeToDashboard;