import React from 'react';
import Type from '../Type';

const Banner = () => {
    return (
        <div className='text-area p-6 dark:text-white'>
            <div className="lg:grid lg:grid-cols-2 gap-10">
                <div className='grid'>
                    <div className='lg:mt-32'>
                        <h1 className="lg:text-5xl text-4xl font-bold default-font mb-2">Video <span className='text-[#fb923c]'>Ainnotation</span></h1>
                       <div className="lg:text-5xl text-2xl default-font font-bold ">
                       <Type/>
                       </div>
                        <p className="py-6 hero-text mb-3">Develop AI faster and better with on-premise, enterprise-grade end-to-end solution for every task from labeling to building production models.</p>
                        <div>
                            <button className='btn btn-secondary mb-3'> Try for free</button>
                        </div>
                       <div className='flex justify-items-center mb-5'>
                       <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                        <span className="label-text mt-1 mx-3 dark:text-white">No payments require</span>
                       </div>
                    </div>
                </div>
                <img src="https://www.webtunix.ai/static/img/videoannotation.gif" className="w-full lg:h-[500px] rounded" />
            </div>
        </div>
    );
};

export default Banner;