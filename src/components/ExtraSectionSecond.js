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
                            <img src="https://transportgeography.org/wp-content/uploads/2017/10/core_components_transportation.png" alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://content3.jdmagicbox.com/comp/def_content/stationery_shops/default-stationery-shops-7.jpg?clr=443322" alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media.istockphoto.com/photos/smart-retail-concept-autonomous-robot-service-use-for-move-box-in-picture-id1197931279?k=20&m=1197931279&s=612x612&w=0&h=954kqa5Eq1d9Pl7vDYq5blxlVXHK-gcu4YqydyQUULA=" alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media.istockphoto.com/photos/paint-roller-with-blue-paint-on-a-wooden-surface-picture-id1320162763?k=20&m=1320162763&s=612x612&w=0&h=XvxnBcIP8WkHCljr4kcGQWsoZjgLVCHZ6htV1Yp3f1k=" alt='' />
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
