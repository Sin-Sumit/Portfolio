import React from 'react';
import Pic from './Professional.png'
import Typewriter from 'typewriter-effect';
import GitHub from './social-icon/github.png';
import Twitter from './social-icon/twitter.png';
import Discord from './social-icon/discord.png';
import LinkedIn from './social-icon/linkedin.png';
import DevTo from './social-icon/devto.png';
import { Element } from 'react-scroll';

const Home=()=>{
    return (
        <Element id="home">
    <div className="w-full container inline-flex mt-64 mb-48">
        <div className="mt-24 w-1/2 absolute inset-x-40 text-4xl font-bold text-gray-400">
            <h2>Welcome ! <span>&nbsp;&nbsp;</span>I'm</h2>
            <div className="text-yellow-600 font-medium">
            <Typewriter
                onInit={(typewriter)=>{
                    typewriter
                    .typeString("Digital Specialist Engineer @ Infosys")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("passionate about Development")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("an Open Source Enthusiast")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("a Web-Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("happy to connect with you")
                    .stop()
                    .start()
                }}
             />              
            </div>
            <div className="mt-20 flex flex-row rounded-full w-1/4 space-x-4">
                <div><a href="https://github.com/Sin-Sumit"><img src={GitHub} alt="GitHub" /></a></div>
                <div><a href="https://twitter.com/SinghSumit7388"><img src={Twitter} alt="Twitter" /></a></div>
                <div><a href="https://www.linkedin.com/in/sin-sumit"><img src={LinkedIn} alt="LinkedIn" /></a></div>
                <div><a href="https://discord.gg/Jgx76F67"><img src={Discord} alt="Discord" /></a></div>
                <div><a href="https://dev.to/sin_sumit"><img src={DevTo} alt="DevTo" /></a></div>

            </div>
        </div>
        <div className="inline-flex w-1/2">
            <img src={Pic} alt='Profile-Pic' className="rounded-full w-1/6 absolute right-40"/>
        </div>
    </div>
    </Element>
    );
}

export default Home;