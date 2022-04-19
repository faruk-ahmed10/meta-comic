import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

import takealook from '../../assets/img/takealook.png';
import Scroll from '../../assets/img/scroll-down.gif';

const TakeAlook = () => {
    
    const [active, setActive] = React.useState(false);
    const takeRef = useRef();

    const scrollTo = (id) => gsap.to(window, {duration: 1, scrollTo: id});

    React.useEffect(() => {

        ScrollTrigger.create({
            trigger: takeRef.current,
            start: "top center",
            onEnter: () => setActive(true),
            onEnterBack: () => setActive(true),
            onLeave: () => setActive(false),
            onLeaveBack: () => setActive(false),
        });

        ScrollTrigger.create({
            trigger: takeRef.current,
            start: "top top",
            pin: true,
            scrub: true,
            pinSpacing: false,
            snap: 0.3,
            // markers: true
        });
    },[]);

    return (
        <div ref={takeRef} className={`min-h-screen w-full pt-32 px-10 transition-all duration-500 ease-in-out overflow-hidden ${active ? 'opacity-100' : 'opacity-0'}`}>
            <div className="">
                <div className="">
                    <img src={takealook} alt="Take a Look" className="" />
                </div>
            </div>
            <div className="flex justify-center items-center py-10">
                <div className="space-y-7">
                    <p className="font-medium text-xl text-center md:text-left">Take a look on our featured books.</p>
                    <div className="flex justify-center ">
                        <div onClick={() => scrollTo('#bookSlide')} className="hidden lg:block w-20 h-20 ">
                            <img src={Scroll} alt="Scroll" className="max-w-full max-h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeAlook;