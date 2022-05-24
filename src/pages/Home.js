import React from 'react';
import Banner from '../components/Banner';
import BuissnessSummary from '../components/BuissnessSummary';
import ExtraHomeSectionOne from '../components/ExtraHomeSectionOne';
import ExtraSectionSecond from '../components/ExtraSectionSecond';
import Reviews from '../components/Reviews';
import ToolCard from '../components/ToolCard';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
          <div className='grid lg:grid-cols-3 gap-5 mt-10 lg:ml-24 ml-20 '>
          <ToolCard></ToolCard>
           <ToolCard></ToolCard>
           <ToolCard></ToolCard>
          </div>
          <h1 className='text-3xl text-center mt-32 mb-10 font-bold'>Achivemnets</h1>
         <BuissnessSummary></BuissnessSummary>
         <ExtraHomeSectionOne></ExtraHomeSectionOne>
         <Reviews></Reviews>
         <ExtraSectionSecond></ExtraSectionSecond>

        </div>
    );
};

export default Home;