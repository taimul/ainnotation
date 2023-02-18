import React from 'react';
import img1 from '../../../Assets/image-annotation-for-autonomous-vehicles.jpg'
import img3 from '../../../Assets/Medical-AI@1x-1.jpg'
import img2 from '../../../Assets/Geospatial-Ground-Truth-White-Paper.jpg'
import img4 from '../../../Assets/Government-industry.jpg'
import img5 from '../../../Assets/Manufacturing-industry.jpg'
import img6 from '../../../Assets/Commerce-Industry.jpg'
import './ServicesCard.css'

const serviceCards = [
    {
        id: "01",
        image: img1,
        title: "Autonomous Technology & Transportation",
        description: "Video annotation services can help in the deployment of autonomous technology by detecting objects like sign-boards, signals, vehicles, street lights and other objects on the road.",
    },
    {
        id: "02",
        image: img2,
        title: "Medical AI ",
        description: "Video annotation in healthcare helps pharmaceutical companies, device manufacturers, and healthcare provider networks to deliver quality services with the help of machine learning.",
    },
    {
        id: "03",
        image: img3,
        title: "Geospatial technology",
        description: "Video annotation tasks include extracting intelligence from satellite, aerial, and drone footage to power applications in energy, agriculture, logistics, security, and mapping.",
    },
    {
        id: "04",
        image: img4,
        title: "Government",
        description: "Video annotation is helping authorities use facial recognition to identify criminals through the use of keypoint annotation on faces taken from public footage.",
    },
    {
        id: "05",
        image: img5,
        title: "Manufacturing",
        description: "Video annotation makes manufacturing more efficient by increasing the productivity of industrial robots. Perceptive robots can help to identify defective items in production or manufacturing pitfalls.",
    },
    {
        id: "06",
        image: img6,
        title: "Commerce",
        description: "Use video annotation to understand the behaviors of consumers in stores to improve retail revenue. Analyze and track how consumers interact with shelves and use object tracking to automate mask identification.",
    },
]

const ServicesCards = () => {

    return (
        <div className='lg:container mx-auto'>
            <div className='text-center'>
                <h1 className='lg:text-[48px] text-[24px] default-font lg:mb-14 p-10 '>WHAT INDUSTRIES NEED VIDEO ANNOTATION SERVICES ?</h1>
            </div>
            <div className='lg:grid lg:grid-cols-3'>
                {serviceCards.map(
                    ({ id, image, title, description }) => (
                        <div key={id} className="shadow dark:border rounded-xl m-5 card-design">
                            <figure className="lg:px-10 lg:pt-10">
                                <img src={image} alt="Shoes" className="rounded-xl h-[320px] lg:w-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{title}</h2>
                                <p>{description}</p>                             
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ServicesCards;