import React from 'react';
import './Banner.css'
const Banner = () => {
   
    return (
        <div class="hero min-h-screen banner-bg-img" >
        <div class="hero-overlay bg-opacity-40"></div>
        <div class="hero-content text-center text-neutral-content">
          <div  class="max-w-md">
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="mb-5 text-5xl font-bold font-serif text-blue-200">Welcome</h1>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" class="mb-5 font-serif text-blue-200">Hope you find wahtever you are looking for</p>
            <button data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" class="btn btn-outline btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      
    );
};

export default Banner;