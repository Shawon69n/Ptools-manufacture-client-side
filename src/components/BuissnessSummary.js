import React from 'react';
import exportImg from '../assets/export.jpg'
import happyClient from '../assets/Happy user giving positive review of online service.jpg'
import review from '../assets/review.jpg'
import countries from '../assets/countries.jpg'
const BuissnessSummary = () => {
    return (
        <>
               
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" class=" shadow-2xl mb-10 lg:mr-44 ml-24 w-52 lg:w-auto lg:ml-44 grid lg:grid-cols-4">
                <div class="stat">
                <img class="mask mask-decagon w-44" src={exportImg} alt=''/>
                    <div class="stat-title">Deliveried</div>
                    <div class="stat-value">89,400+</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
                <div class="stat">
                <img class="mask mask-decagon w-44" src={happyClient} alt=''/>
                    <div class="stat-title">Happy client</div>
                    <div class="stat-value">80000+</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
                <div class="stat">
                <img class="mask mask-decagon w-44" src={review} alt=''/>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value">50000+</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
                <div class="stat">
                <img class="mask mask-decagon w-44" src={countries} alt=''/>
                    <div class="stat-title">Countires</div>
                    <div class="stat-value">130+</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
  
        </div>
        </>
    );
};

export default BuissnessSummary;