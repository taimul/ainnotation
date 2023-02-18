import React from 'react';
import logo from '../../Assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10  text-base-content dark:text-white">
            <div>
                <img className='w-[100px]' src={logo} alt="" />
                <p>Ainnotation<br />Supervisely provides first-rate experience since 2017</p>
            </div>
            <div>
                <span className="text-xl font-bold">Services</span>
                <a className="link link-hover">Bounding Boxes</a>
                <a className="link link-hover">Landmark Annotation</a>
                <a className="link link-hover">3D Cuboid Annotation</a>
                <a className="link link-hover">Polygon Annotation</a>
            </div>
            <div>
                <span className="text-xl font-bold">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">pricing</a>
            </div>
            <div>
                <span className="text-xl font-bold">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;