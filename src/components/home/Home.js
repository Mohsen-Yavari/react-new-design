import React,{useEffect, useState} from 'react';
import "./home.scss";
import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from "react-router-dom";

import Animated from '../Animated/Animated';
import Logo from "./logo/Logo";

import Loader from 'react-loaders'

const Home = () => {

    const [letterClass,setLetterClass] =useState('text-animate');
    const nameArray = ['E','N'];
    const jobArray = ['w','e','b',' ','d','v','e','l','o','p','e','r']

    useEffect (()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>I,</span>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>M</span><br />
                    <span className={`${letterClass} _15`}>M</span>
                    <span className={`${letterClass} _16`}>O</span>
                    <span className={`${letterClass} _17`}>H</span>
                <img src={LogoTitle} alt="logo" />
                <Animated 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <Animated 
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                </h1>
                <h2>Front End Developer / JavaScript  / React Js Developer</h2>
                <Link to='/contact' className='flat-botton'>CONTACT ME</Link>

            </div>
            <Logo />
            <Loader type="pacman" />
        </div>
        </>
    );
};

export default Home;