import React from 'react';
import './Navbar.css';
import Pdf from './social-icon/RESUME.pdf';
import {Link} from 'react-scroll';

function onResumeClick(){
    window.open(Pdf);
}

const Navbar=()=>{
    return(
        <nav className="md:container md:inline-flex font-sans text-2xl subpixel-antialiased text-gray-400 ">
        <div className="absolute inset-y-10 md:inset-x-40 signature text-4xl font-semibold left-0">
            <h2>Sumit Singh</h2>
        </div>
            <div className="inline-flex space-x-20 absolute inset-y-10 right-40">
                <div>
                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
                        <a href='/home' className="flex-1 hover:text-gray-300">Home</a>
                    </Link>
                </div>
                <div>
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >
                        <a href='/about' className="flex-1 hover:text-gray-300">About</a>
                    </Link>
                </div>
                <div>
                    <Link activeClass="active" to="achievement" spy={true} smooth={true} duration={500} >
                        <a href='/achievements' className="flex-1 hover:text-gray-300">Achievements</a>
                    </Link>
                </div>
                <div>
                    <a href='/Resume' onClick={onResumeClick} className="flex-1 hover:text-gray-300">Resume</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;