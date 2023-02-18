import React from 'react';

const Banner = () => {
    return (
        <div className='text-area p-6'>
            <div className="lg:grid lg:grid-cols-2 gap-10">
                <div className='grid'>
                    <div className='lg:mt-32'>
                        <h1 className="lg:text-5xl text-4xl font-bold default-font mb-2">Ainnotation</h1>
                        <h1 className="lg:text-5xl text-3xl default-font font-bold ">An AI <span className='text-[#8382EB]'>Annotation</span> Service</h1>
                        <p className="py-6 hero-text mb-3">Develop AI faster and better with on-premise, enterprise-grade end-to-end solution for every task from labeling to building production models.</p>
                        <div>
                            <button className='btn btn-secondary mb-3'> Try for free</button>
                        </div>
                       <div className='flex justify-items-center mb-5'>
                       <input type="checkbox" checked className="checkbox checkbox-primary" />
                        <span className="label-text mt-1 mx-3">No payments require</span>
                       </div>
                    </div>
                </div>
                <img src="https://user-images.githubusercontent.com/4310419/47907116-85667800-de82-11e8-83d0-b9f4eb33268f.gif" className="w-full lg:h-[584px]  image-card" />
            </div>
        </div>
    );
};

export default Banner;