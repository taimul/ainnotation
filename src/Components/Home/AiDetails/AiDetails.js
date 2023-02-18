import React from 'react';

const AiDetails = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 lg:mt-[120px] flex flex-col-reverse p-10 bg-[#F8F8F9]'>
        <div className='m-res'><img src="https://miro.medium.com/max/831/1*X298woObGukVro8OdEXFWA.png" alt="" className='lg:h-[350px] lg:w-[600px]'/></div>
        <div className='lg:p-[50px]'>
            <div><h1 className='lg:text-[36px] text-[20px] default-font lg:mb-0 mb-5'>WHAT IS VIDEO ANNOTATION?</h1></div>
            <div className='lg:mt-[30px] lg:w-[553px] default-font'><p>Video annotation is the process of labeling or tagging video clips which are used for training computer vision models to detect or identify objects. Unlike image annotation, video annotation involves annotating objects on a frame-by-frame basis to make them recognizable for machine learning models.</p></div>
            
        </div>
    </div>
    );
};

export default AiDetails;