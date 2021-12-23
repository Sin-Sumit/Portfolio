import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Element } from 'react-scroll';

const Achievements=()=>{
    return (
        <Element id="achievement">
    <div className="font-sans subpixel-antialiased text-gray-400">
    <div className="ml-36 mt-96 text-5xl font-medium"><h1>Achievements</h1></div>
    <div className="mt-48">
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="29 July 2019"
                iconStyle={{ background: 'rgb(255,140,0)', color:'#fff' }}
                >
                <h3 className="vertical-timeline-element-title text-3xl text-gray-600">Research Paper</h3>
                <h4 className="vertical-timeline-element-subtitle text-xl text-gray-500">Pre-Processing and Partition of Voice for Semi-Voice Authentication</h4>
                <p>
                This Research work started from 3 friends and a professor, after almost 1.5 year we presented our work in 2018 Fourth International Conference on Advances in Computing, Communication & Automation (ICACCA)
                where our work get accepted and after a year it published under IEEEXplore in 29 July 2019. This is basically an idea about the improvement in voice security. <br></br>
                Check-out the work: <a href="https://ieeexplore.ieee.org/document/8776849/metrics#metrics"><strong className="text-gray-600">Click here</strong></a>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019"
                iconStyle={{ background: 'rgb(255,140,0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-3xl text-gray-600">Smart India Hackathon</h3>
                <h4 className="vertical-timeline-element-subtitle text-xl text-gray-500">Frontend Developer</h4>
                <p>
                Smart India Hackathon is a 24 hour Hackathon where my team suggest a solution for the problem of Ministry of Statistics and Programme Implementation
                So we have to create a notification system which analyse the data of respective Ministry and check whether the data is updated or not, if yes then it will notigy the user regarding that changes. 
                It was a ML project where my role is to design the Frontend 
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div> <br></br><br></br>
    </div>
    </Element>
    );
}

export default Achievements;