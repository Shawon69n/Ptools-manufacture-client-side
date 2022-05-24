import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./ExtrasectionsecondC.css"

// import required modules
import { EffectCube, Pagination } from "swiper";

const ExtraSectionSecond = () => {
    return (
        <>
            <div class="hero min-h-screen bg-slate-300 ">
                <div class="hero-content flex-col lg:flex-row">
                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='' />
                        </SwiperSlide>
                    </Swiper>
                    <div className='flex flex-col lg:ml-52'>
                        <h2 className='text-xl mb-5 font-mono text-center'>Become our supllier</h2>
                        <input type="text" placeholder="Your Name" class="input input-bordered input-info w-72 max-w-xs" />
                        <input type="text" placeholder="Your email" class="input input-bordered input-info w-72 max-w-xs mt-3" />
                        <textarea  placeholder="Write about what you want to supply..." class="textarea textarea-info w-72 max-w-xs mt-3" />
                        <button class="btn btn-primary w-72 mt-3">Send</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExtraSectionSecond;



{/* <Swiper
effect={"cube"}
grabCursor={true}
cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
}}
pagination={true}
modules={[EffectCube, Pagination]}
className="mySwiper"
>
<SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='' />
</SwiperSlide>
<SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='' />
</SwiperSlide>
<SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='' />
</SwiperSlide>
<SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='' />
</SwiperSlide>
</Swiper> */}