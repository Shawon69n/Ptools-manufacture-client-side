import React from 'react';

const ExtraHomeSectionOne = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://us.123rf.com/450wm/artursz/artursz2008/artursz200800349/152975220-conceptual-hand-writing-showing-stay-connected-concept-meaning-to-remain-having-social-professional-.jpg?ver=6" class="max-w-sm rounded-lg shadow-2xl" alt=''/>
          <div>
      
          <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" class="mockup-phone">
        <div class="camera"></div> 
        <div class="display">
          <div class="artboard artboard-demo phone-1">
              <h2 className='text-xl mb-5 font-mono text-center'>Stay connected with us for our latest updates</h2>
          <input type="text" placeholder="Your Name" class="input input-bordered input-info w-72 max-w-xs" />
          <input type="text" placeholder="Your email" class="input input-bordered input-info w-72 max-w-xs mt-3" />
          <button class="btn btn-primary w-72 mt-3">Send</button>
          
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    );
};

export default ExtraHomeSectionOne;