import React from 'react';
import './Banner.css'
const Banner = () => {
   
    return (
        <div className="hero min-h-screen banner-bg-img" >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div  className="max-w-md">
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="mb-5 text-5xl font-bold font-serif text-blue-200">Welcome</h1>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" className="mb-5 font-serif text-blue-200">Hope you find wahtever you are looking for</p>
            <button data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" className="btn btn-outline btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      
    );
};

export default Banner;