import React from 'react';
import Banner from '../components/Banner';
import ToolCard from '../components/ToolCard';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
          <div className='grid lg:grid-cols-3 gap-5 mt-10 lg:ml-24 ml-16 '>
          <ToolCard></ToolCard>
           <ToolCard></ToolCard>
           <ToolCard></ToolCard>
          </div>
        </div>
    );
};

export default Home;