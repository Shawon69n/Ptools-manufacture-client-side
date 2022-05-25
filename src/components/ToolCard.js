import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({product}) => {
    const {name,price,details,image,availableQuantity,minimumQuantity} = product;
    return (
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" class="card w-60 lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{details.slice(0,150)}... <Link className='text-sm text-orange-300' to=''>see more</Link></p>
                <div class="card-actions flex-col">
                    <div> Available quantity : <span class="badge badge-outline">{availableQuantity}</span></div>
                    <div> Minimum Order quantity : <span class="badge badge-outline">{minimumQuantity}</span></div>
                    <div><h2>Price : ${price}</h2></div>
                </div>
                <button className='btn btn-primary mt-10'>Order now</button>
            </div>
        </div>
    );
};

export default ToolCard;