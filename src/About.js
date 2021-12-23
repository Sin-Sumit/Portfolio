import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element id="about">
    <div className="font-sans subpixel-antialiased text-gray-400">
    <div className="ml-36 mt-96 text-5xl font-medium"><h1>About</h1></div>
    <div className="mt-48">
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="18-Oct-2021 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color:'#fff' }}
                >
                <h3 className="vertical-timeline-element-title text-3xl">Digital Specialist Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle text-xl">Infosys</h4>
                <p>
                As a DSE, I worked with Microservices, Angular and Spring Data JPA technologies, 
                Integrate all these tech into a Transportation Project where multiple microservices created and integrated with angular 
                using JPA data
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1-Oct-21 - 15-Oct-21"
                iconStyle={{ background: 'rgb(255,140,0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-3xl text-gray-600">Hacktoberfest</h3>
                <h4 className="vertical-timeline-element-subtitle text-xl text-gray-500">Contributor</h4>
                <p>
                Hacktoberfest is a month long fest where anyone can make contribution to various Open Source Organization, I 
                contributed in various Repos mainly in Appwrite, Earn few swags from Hacktoberfest & Appwrite, and explored other organization as well
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1-Aug-21 - 30-Sep-21"
                iconStyle={{ background: 'rgb(255,140,0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-3xl text-gray-600">Git & Open Soure</h3>
                <h4 className="vertical-timeline-element-subtitle text-xl text-gray-500">Learner</h4>
                <p>
                Learn about Git, GitHub, How to make contribution, PR, and Customize my GitHub Profile, 
                Check-out my GitHub Profile <a href="https://github.com/Sin-Sumit"><strong className="text-gray-600">Sin-Sumit</strong></a> & Repositories, give star to profile or any favourite Repo
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017 - 2021"
                iconStyle={{ background: 'rgb(255,140,0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-3xl text-gray-600">Graduation</h3>
                <h4 className="vertical-timeline-element-subtitle text-xl text-gray-500">Computer Science Engineering</h4>
                <p>
                Completed my Graduation in Computer Science Engineering from Pranveer Singh Institute of Technology,
                with CGPA 8.52
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="During College"
                iconStyle={{ background: 'rgb(255,140,0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-3xl text-gray-600">Technologies</h3>
                <h4 className="vertical-timeline-element-subtitle text-xl text-gray-500">Technologies I worked with</h4>
                <p>
                    Spring Microservices, Spring Data JPA, Angular, Java, Python, C, C++, SQL, MarkDown, Git, Bootstrap, Tailwind CSS, HTML, CSS, JavaScript, Flask
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </div>
    </Element>
    );
}

export default About;