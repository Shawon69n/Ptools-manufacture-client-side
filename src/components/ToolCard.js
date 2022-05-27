import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ToolCard = ({product}) => {
    const {name,price,details,image,availableQuantity,minimumQuantity,_id} = product;
    const navigate = useNavigate();
    const handleOrderBtn = id =>{
        navigate(`/product/${id}`)
    }
    return (
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="card w-60 lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{details.slice(0,150)}... <Link className='text-sm text-orange-300' to=''>see more</Link></p>
                <div className="card-actions flex-col">
                    <div> Available quantity : <span className="badge badge-outline">{availableQuantity}</span></div>
                    <div> Minimum Order quantity : <span className="badge badge-outline">{minimumQuantity}</span></div>
                    <div><h2>Price : ${price}</h2></div>
                </div>
                <button onClick={() => handleOrderBtn(_id)} className='btn btn-primary mt-10'>Order now</button>
            </div>
        </div>
    );
};

export default ToolCard;