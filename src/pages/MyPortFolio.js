import React from 'react';
import project1 from '../assets/assignment11.png'
import project2 from '../assets/assignment10.png'
import project3 from '../assets/assignment9.png'
const MyPortFolio = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" src="https://media.istockphoto.com/photos/close-up-view-of-a-laptop-with-a-business-chart-on-the-screen-picture-id1205248124?k=20&m=1205248124&s=612x612&w=0&h=hfsQEnNxpErkSt2RDBV-uf1lOBHUR1ym-h3PkIyGTfI=" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" class="text-5xl font-bold mr-40">Hello , I'am SHAWON</h1>
                        <p data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" class="py-6">I'm a college 2nd year student .</p>
                        <p data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className=''>I'm a junior web developer . I've started learning web developing since <br /> 1st january of 2022 and I'm still learning. </p>
                        <p data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className='mt-5 mb-5'>The skills I've got from this journey : </p>

                       <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                       <p><span className='text-xl font-bold'>HTML</span> : <progress class="progress h-3 w-64 ml-14" value="70" max="100"></progress></p>
                        <p><span className='text-xl font-bold'>JavaScript</span> : <progress class="progress progress-warning h-3 w-64 ml-4" value="60" max="100"></progress></p>
                        <p><span className='text-xl font-bold'>React</span> : <progress class="progress progress-primary h-3 w-64 ml-14" value="80" max="100"></progress></p>
                        <p><span className='text-xl font-bold'>Nodejs</span> : <progress class="progress progress-success h-3 w-64 ml-11" value="70" max="100"></progress></p>

                        <p className='mt-5 text-sm '>My email : <span className='text-slate-900 font-bold'>s.shawon0000@gmail.com</span></p>
                       </div>

                    </div>
                </div>
            </div>

            <h1 className='text-2xl text-center font-bold mb-10'>Some of my projects</h1>
            <div className='lg:grid lg:grid-cols-3 mt-10 lg:ml-28 mb-28'>
                <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" class="card card-compact shadow-2xl w-96 bg-base-100 ">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Musica</h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href="https://assignment-11-warehouse-86f7a.web.app">Live preview</a></button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"  class="card card-compact w-96 bg-base-100 shadow-2xl">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Moment captcha</h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href="https://assignment-10-10830.web.app">Live preview</a></button>

                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"  class="card card-compact w-96 bg-base-100 shadow-2xl">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Siu convention center</h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href="https://shawon-606.netlify.app/">Live preview</a></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortFolio;