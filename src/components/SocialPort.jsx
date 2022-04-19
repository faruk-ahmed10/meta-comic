import React from 'react';
import { RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SocialPort = () => {

    const socialRef = React.useRef();
    const titleRef = React.useRef();
    const iconRef = React.useRef();

    React.useEffect(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                toggleActions: 'restart none none reset'
            },
        })
        .from(titleRef.current, {
            y: 100,
            duration: 1
        })
        .from(iconRef.current,{ opacity: 0, duration: 1, delay: 0.3 });
            // ScrollTrigger.create({
            //     trigger: socialRef.current,
            //     start: "center 100px", 
            //     snap: 1,
            // });

    },[]);

    return (
        <div ref={socialRef} className="w-full min-h-screen px-10 flex justify-center items-center">
            <div className="">
                <div className="overflow-hidden">
                    <h1 ref={titleRef} className="text-center text-2xl md:text-4xl font-medium">Get more on our social portfolios</h1>
                </div>
                <div ref={iconRef} className="flex justify-center items-center gap-5 mt-10">
                    <a href='#' className="w-10 h-10 md:w-16 md:h-16 rounded-full flex justify-center items-center text-xl md:text-3xl hover:text-4xl transition-all duration-300 ease-in-out text-primary bg-primary/10">
                        <FaTelegramPlane />
                    </a>
                    <a href='#' className="w-10 h-10 md:w-16 md:h-16 rounded-full flex justify-center items-center text-xl md:text-3xl hover:text-4xl transition-all duration-300 ease-in-out text-primary bg-primary/10">
                        <RiTwitterFill />
                    </a>
                    <a href='#' className="w-10 h-10 md:w-16 md:h-16 rounded-full flex justify-center items-center text-xl md:text-3xl hover:text-4xl transition-all duration-300 ease-in-out text-primary bg-primary/10">
                        <RiInstagramLine />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialPort;