import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const services= [
    {
        id: "01",
        image: "https://imerit.net/wp-content/uploads/2020/06/Defense-Bounding-Box@1x.jpg",
        title: "BOUNDING BOXES",
        description: "It is the most commonly used type of video annotation in computer vision. iMerit computer vision experts use rectangular box annotation to illustrate objects and create training data so apps and algorithms can identify and localize objects during ML processes.",
    },
    {
        id: "02",
        image: "https://imerit.net/wp-content/uploads/2020/06/Polygon-Annotation@1x.jpg",
        title: "POLYGON ANNOTATION",
        description: "Expert annotators plot points on each vertex of the target object. Polygon annotation allows all of the object’s exact edges to be annotated, regardless of shape.",
    },
    {
        id: "03",
        image: "https://imerit.net/wp-content/uploads/2020/06/Semantic-Segmention.jpg",
        title: "SEMANTIC SEGMENTATION",
        description: "Videos are segmented into component parts, by the iMerit team, and then annotated. iMerit computer vision experts examine video frames and classify objects pixel by pixel.",
    },
    {
        id: "04",
        image: "https://imerit.net/wp-content/uploads/2020/06/Keypoint-Annotation@1x-1.jpg",
        title: "KEYPOINT ANNOTATION",
        description: "iMerit teams outline objects and shape variations by connecting individual points across objects. This annotation type detects body features and could include facial expressions and emotions.",
    },
    {
        id: "05",
        image: "https://imerit.net/wp-content/uploads/2021/11/Landmark-annotation.jpg",
        title: "LANDMARK ANNOTATION",
        description: "iMerit experts use points on landmarks and peoples’ faces when annotating video footage. Expertly-conducted landmark annotation creates valuable training datasets for high-performing computer vision models.",
    },
    {
        id: "06",
        image: "https://imerit.net/wp-content/uploads/2021/11/3d-cuboid-annotation.jpg",
        title: "3D CUBOID ANNOTATION",
        description: "iMerit experts perform object tracking by drawing cubes around objects. This allows systems to recognize a given object’s length, width, and height.",
    },
    {
        id: "07",
        image: "https://imerit.net/wp-content/uploads/2021/11/Polyline-annotation.jpg",
        title: "POLYLINE ANNOTATION",
        description: "iMerit experts create training datasets using polyline annotation that teach models to identify physical boundaries to operate within.",
    },
    {
        id: "08",
        image: "https://imerit.net/wp-content/uploads/2021/11/Rapid-annotation.jpg",
        title: "RAPID ANNOTATION",
        description: "iMerit’s video annotation platform utilizes video interpolation to rapidly annotate suitable video footage. iMerit annotation experts create best-in-class video training datasets in rapid time for any AI or ML project.",
    },
]

const Services = () => {
    // AOS library for animation
    useEffect(() => {
        AOS.init({ 
            disable: "mobile",
            duration: 3000 
        });
    })
    return (
        <div>
             <div className='text-center '>
                {/* <h1 className='lg:text-[48px] text-[24px] default-font lg:mb-14 p-10 dark:text-white'>OUR VIDEO ANNOTATION SERVICES</h1> */}
                <h2 class="mb-4 mt-14 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Our Video Annotation Services</h2>
            </div>
            <div className='lg:grid lg:grid-cols-3 container mx-auto '>
                {services.map(
                    ({ id, image, title, description }) => (
                        <div key={id} className="shadow dark:border dark:text-white rounded-xl m-5 " data-aos="fade-center" data-aos-easing="ease-in-cubic">
                            <figure className="lg:px-5 lg:pt-5">
                                <img src={image} alt="Shoes" className="rounded-xl h-[320px] w-full" />
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

export default Services;