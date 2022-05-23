import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviews = [
        {
            _id:1,
            name: 'Austin',
            review:'',
            ratings: '5',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jCtfaiEmORqaGNVoy0GwSHmek67WKPiVFQ&usqp=CAU",
            loaction: 'Swizerland'
        },
        {
            _id:2,
            name: 'Martin',
            review:'',
            ratings:'5',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdAzz79aKA9vuY1fNYRVFf-k8sBZxV9Zlzea3cvpohIx-_CIosKFNIvT5p10r3kpl178&usqp=CAU",
            loaction: 'UAE'
        },
        {
            _id:3,
            name: 'Joe',
            review:'',
            ratings: '4.5',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MuLZ8eygTYV6jUKp6BSwhxstmp1TY0DTMuegkMoYsGSJOr6qmN0MOdkbHFrOU3cvc9Q&usqp=CAU",
            loaction: 'Japan'
        },
    ]
    return (
        <section className='my-28'>
                <div>
                    <h2 className='text-3xl text-center'>Checkout some of our customers review</h2>
                </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-16'>
            {reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)}
            </div>
        </section>
    );
};

export default Reviews;