import React from 'react';
import './Banner.css'
const Banner = () => {
   
    return (
        <div class="hero min-h-screen banner-bg-img" >
        <div class="hero-overlay bg-opacity-40"></div>
        <div class="hero-content text-center text-neutral-content">
          <div  class="max-w-md">
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="mb-5 text-5xl font-bold">Hello there</h1>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      
    );
};

export default Banner;