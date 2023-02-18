import React from 'react';

const AiDetails = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 lg:mt-[120px] flex flex-col-reverse p-10 bg-[#F8F8F9]'>
        <div className='m-res'><img src="https://miro.medium.com/max/831/1*X298woObGukVro8OdEXFWA.png" alt="" className='lg:h-[350px] lg:w-[600px]'/></div>
        <div className='lg:p-[50px]'>
            <div><h1 className='lg:text-[46px] text-[28px] default-font'>What is AI Annotation ?</h1></div>
            <div className='lg:mt-[30px] lg:w-[553px] workout1-description default-font'><p>AI Annotation, also known as data annotation, is the process of labeling and categorizing data for use in training artificial intelligence (AI) and machine learning (ML) models. This involves adding metadata or tags to the data to help the model recognize patterns and make predictions.</p></div>
            
        </div>
    </div>
    );
};

export default AiDetails;