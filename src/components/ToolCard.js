import React from 'react';

const ToolCard = () => {
    return (
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" class="card w-60 lg:w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    Shoes!
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions flex-col">
                    <div> Available quantity : <span class="badge badge-outline">1400</span></div>
                    <div> Minimum Order quantity : <span class="badge badge-outline">100</span></div>
                    <div><h2>Price : $10</h2></div>
                </div>
                <button className='btn btn-primary mt-10'>Order now</button>
            </div>
        </div>
    );
};

export default ToolCard;