import React from 'react';
import exportImg from '../assets/export.jpg'
import happyClient from '../assets/Happy user giving positive review of online service.jpg'
import review from '../assets/review.jpg'
import countries from '../assets/countries.jpg'
const BuissnessSummary = () => {
    return (
        <>
               
        <div className=" shadow-2xl mb-10 lg:mr-44 ml-24 w-52 lg:w-auto lg:ml-44 grid lg:grid-cols-4">
                <div className="stat">
                <img className="mask mask-decagon w-44" src={exportImg} alt=''/>
                    <div className="stat-title">Deliveried</div>
                    <div className="stat-value">89,400+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                <img className="mask mask-decagon w-44" src={happyClient} alt=''/>
                    <div className="stat-title">Happy client</div>
                    <div className="stat-value">80000+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                <img className="mask mask-decagon w-44" src={review} alt=''/>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">50000+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                <img className="mask mask-decagon w-44" src={countries} alt=''/>
                    <div className="stat-title">Countires</div>
                    <div className="stat-value">130+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
  
        </div>
        </>
    );
};

export default BuissnessSummary;