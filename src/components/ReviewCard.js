import React from 'react';

const ReviewCard = ({r}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl font-serif">
            <div className="card-body">
            <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full mr-5">
                            <img src={r?.img} alt='' />
                        </div>
                    </div>

                    <div >
                        <h4 className='text-xl'>{r?.name}</h4>
                        <p>{r?.address}</p>

                        <div className='flex mt-3'>
                            <h5>Ratings : {r?.rating}</h5>
                            <div className="rating rating-sm mt-1">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>
                    </div>

                </div>
                
                <p>{r?.review}</p>


            </div>
        </div>
    );
};

export default ReviewCard;