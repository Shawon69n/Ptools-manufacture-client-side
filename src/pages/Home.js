import { useQuery } from 'react-query';
import Banner from '../components/Banner';
import BuissnessSummary from '../components/BuissnessSummary';
import ExtraHomeSectionOne from '../components/ExtraHomeSectionOne';
import ExtraSectionSecond from '../components/ExtraSectionSecond';
import Reviews from '../components/Reviews';
import ToolCard from '../components/ToolCard';
import Loading from '../Shared/Loading';

const Home = () => {

    const {data: products ,  isLoading} = useQuery('/products' , () => fetch('https://fathomless-wave-90975.herokuapp.com/products')
            .then(res => res.json()))

            if(isLoading){
                return <Loading></Loading>
            }
    return (
        <div>
            <Banner></Banner>
            <div className='grid lg:grid-cols-3 gap-5 mt-10 lg:ml-24 ml-20 '>
                {products?.map(product => <ToolCard product={product} key={product?._id}></ToolCard>)}
            </div>

            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <h1 className='text-3xl text-center mt-32 mb-10 font-bold font-serif'>Achivemnets</h1>
                <BuissnessSummary></BuissnessSummary>
            </div>
            <ExtraHomeSectionOne></ExtraHomeSectionOne>
            <Reviews></Reviews>
            <ExtraSectionSecond></ExtraSectionSecond>

        </div>
    );
};

export default Home;