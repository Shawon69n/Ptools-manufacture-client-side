import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl font-serif">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis accusantium ullam unde veniam error perspiciatis.</p>


                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>

                    <div >
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.loaction}</p>

                        <div className='flex mt-3'>
                            <h5>Ratings : {review?.ratings}</h5>
                            <div class="rating rating-sm mt-1">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default ReviewCard;