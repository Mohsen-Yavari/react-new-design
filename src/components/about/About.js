import React from 'react';
import "./about.scss";
import Loader from 'react-loaders'
import Animated from "../Animated/Animated";

const About = () => {
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1 >
                        <Animated 
                        strArray={['A','B','O','U','T','','M','E']}
                        idx={15}
                        />
                    </h1>
                        <p >
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Accusantium, unde?
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Accusantium, unde?
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Accusantium, unde?
                        </p>
                        <div></div>
                        <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Accusantium, unde?
                        Lorem ipsum dolor sit amet consectetur 
                        </p>
                
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespiner">
                        <div className="face1">
                        <i class="ri-angularjs-line" style={{color:"#dd0031"}}></i>
                        </div>
                        <div className="face2">
                        <i class="ri-html5-line" style={{color:"#f06529"}}></i>
                        </div>
                        <div className="face3">
                        <i class="ri-css3-line" style={{color:"#28a4d9"}}></i>
                        </div>
                        <div className="face4">
                        <i class="ri-reactjs-line" style={{color:"#4cc9f0"}}></i>
                        </div>
                        <div className="face5">
                        <i class="ri-vuejs-line" style={{color:"#40916c"}}></i>
                        </div>
                        <div className="face6">
                        <i class="ri-github-line" style={{color:"#6d23b6"}}></i>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;

