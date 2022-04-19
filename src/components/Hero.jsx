import React, {useEffect, useRef} from 'react';
import Header from "./Header";
import { RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from 'react-icons/fa';
import Slider from 'react-slick';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);



// importing assets

import bgImage from '../../assets/img/bg.png';
import bg2Image from '../../assets/img/bg2.png';
import Scroll from '../../assets/img/scroll-down.gif';
import ellipseArrow from '../../assets/img/ellipseArrow.svg';


const settings = {
    className: 'hero',
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand"
  };

const Hero = () => {

    const titlesRef = useRef([]);


    const scrollTo = (id) => gsap.to(window, {duration: 1, scrollTo: id});
    
    useEffect(() => {
        const tl = gsap.timeline({y: 100, duration: 1, ease: 'ease-in-out',});
        titlesRef.current.map(v => {
            gsap.from(v,{
                    y: 100, 
                    duration: 1, 
                    ease: 'ease-in-out',
                    delay: .3,
                });
        })

    },[]);
    console.log(titlesRef);
    return (
        <section className="relative w-full min-h-screen max-h-screen overflow-hidden" >
            <div className="w-full h-full max-h-screen">
                <Slider className="w-full h-full max-h-screen overflow-hidden" {...settings} >
                    <div >
                        <img src={bgImage} alt="Bg Image" className="max-h-full max-w-full min-h-screen min-w-full object-cover" />
                    </div>
                    <div className="">
                        <img src={bg2Image} alt="Bg Image" className="max-h-full max-w-full min-h-screen min-w-ful object-cover" />
                    </div>
                </Slider>
            </div>
            <div className="absolute w-full h-full top-0 left-0 md:px-10 -z-0">
                <div className="relative w-[90%] mx-auto">
                    <div className="relative pt-40">
                        <div className="md:flex justify-between items-center">
                            <div className="">
                                <ul className="text-4xl text-center md:text-left sm:text-5xl md:text-6xl font-bold">
                                    <li className='overflow-hidden'><h1 ref={ref => titlesRef.current[0] = ref} >World’s First</h1></li>
                                    <li className='overflow-hidden'><h1 ref={ref => titlesRef.current[1] = ref} >Decentralized</h1></li>
                                    <li className='overflow-hidden'><h1 ref={ref => titlesRef.current[2] = ref} >Comic Book</h1></li> 
                                    <li className='overflow-hidden'><h1 ref={ref => titlesRef.current[3] = ref} >publishing</h1></li>
                                    <li className='overflow-hidden'><h1 ref={ref => titlesRef.current[4] = ref} >platform</h1></li>
                                </ul>
                            </div>
                            <div className="space-x-3 md:space-x-0 md:space-y-3 flex md:flex-col items-center justify-center mt-5">
                                <div className="flex justify-center items-center cursor-pointer w-10 h-10 text-xl bg-primary/20 rounded-full p-2 text-primary"><FaTelegramPlane /></div>
                                <div className="flex justify-center items-center cursor-pointer w-10 h-10 text-xl bg-primary/20 rounded-full p-2 text-primary"><RiTwitterFill /></div>
                                <div className="flex justify-center items-center cursor-pointer w-10 h-10 text-xl bg-primary/20 rounded-full text-primary"><RiInstagramLine /></div>
                            </div>
                        </div>
                        <div className="md:flex justify-between items-center pt-2">
                            <p className="flex items-center justify-center text-xs md:text-sm lg:text-base"><span className="">View Featured Books or Just scroll Down</span> <span className='w-6 h-6 lg:w-10 lg:h-10 ml-2'><img src={ellipseArrow} alt="Arrow" className="max-w-full max-h-full transform rotate-90" /></span></p>
                            <div className="flex  justify-center items-center">
                                <span onClick={() => scrollTo('#publishing')} className="h-20 w-20 cursor-pointer md:-mt-2 -mr-6">
                                    <img src={Scroll} alt="Scroll Down" className="max-w-full max-h-full" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;