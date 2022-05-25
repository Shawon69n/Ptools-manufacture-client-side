import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    
    const {data: reviews ,  isLoading} = useQuery('reviews' , () => fetch('http://localhost:5000/reviews')
    .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='my-28'>
                <div>
                    <h2 className='text-3xl text-center font-serif'>Checkout some of our customers review</h2>
                </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-16'>
            {reviews.map(r => <ReviewCard r={r} key={r._id}></ReviewCard>)}
            </div>
        </section>
    );
};

export default Reviews;