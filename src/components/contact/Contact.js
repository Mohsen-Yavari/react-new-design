import React,{useEffect,useState} from 'react';
import "./contact.scss";
import Loader from 'react-loaders';
import Animated from "../Animated/Animated";

const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(()=>{
         return setTimeout(()=>{
             setLetterClass('text-animate-hover');
         },3000)   
    },[])

    return (
 
        <>
            <div className="container contact-page">
                <div className="text-zone">
                <h1>
                    <Animated 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']} 
                    idx={15}
                    />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet conse
                    ctetur adipisicing elit. Volupta
                    te ex inventore temporibus explic
                    abo architecto excepturi beatae
                    nostrum sequi, quasi ducimus.
                </p>
                <div className="contact-form">
                    <form>
                        <ul>
                            <li className="helf">
                                <input 
                                type="text" 
                                name="name" 
                                placeholder="name" 
                                required />
                            </li>
                            <li className="helf">
                                <input 
                                type="email" 
                                name="email" 
                                placeholder="email" 
                                required />
                            </li>
                            <li >
                                <input 
                                type="text" 
                                name="name" 
                                placeholder="subject" 
                                required />
                            </li>
                            <li>
                                <textarea 
                                placeholder="massage"
                                name="massage" 
                                required 
                                >
                                
                                </textarea>
                            </li>
                           
                            <li>
                            <input  type="submit" className="flat-button" value="send" />
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
            </div>  
            <Loader type="pacman" />
            
        </>
    );
};

export default Contact;