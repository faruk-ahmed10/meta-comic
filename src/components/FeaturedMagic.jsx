import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


import featuredmagic1 from '../../assets/img/featuremagic.png';

const featuredmagic2 = 'https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
const featuredmagic3 = 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
const featuredmagic4 = 'https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
const featuredmagic5 = 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';

const FeaturedMagic = () => {

    const [active, setActive] = React.useState(0);
    const [menu, setMenu] = React.useState(false);

    const featureRef = React.useRef();
    const slidesRef1 = React.useRef();
    const slidesRef2 = React.useRef();
    const slidesRef3 = React.useRef();
    const slidesRef4 = React.useRef();


    const scrollTo = (id) => gsap.to(window, {duration: 1, scrollTo: id});

    React.useEffect(() => {

        gsap.utils.toArray('.featured').forEach((feature, idx) => {
            ScrollTrigger.create({
                trigger: feature,
                start: "top center",
                end: "bottom center",
                scrub: true,
                onEnter: () => setActive(idx),
                onLeave: () => setActive(idx),
                onUpdate: () => setActive(idx),
            });
        })

    },[]);

    React.useEffect(() => {
        ScrollTrigger.create({
            trigger: featureRef.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => setMenu(true),
            onLeave: () => setMenu(false),
            onEnterBack: () => setMenu(true),
            onLeaveBack: () => setMenu(false)
        });
    },[])
    
    console.log("Active: ", active);

    return (
        <section ref={featureRef} className={`transition-all duration-500 ease-in-out ${menu ? 'opacity-100' : 'opacity-0 overflow-hidden'}`}>
            <div className="relative">
                <div className="md:w-[90%] mx-auto">
                    <div className={`top-40 z-50 left-4 md:left-10 transition-all duration-500 ease-in-out ${ !menu ? 'hidden' : 'fixed'}`}>
                        <h4 className="uppercase font-medium text-secondary">FEATURED MAGIC</h4>
                        <ul className="">
                            <li className={`transition-all duration-500 ease-in-out ${active === 0 ? 'text-2xl sm:text-5xl lg:text-7xl font-bold' : 'text-xl sm:text-4xl opacity-60'}`}>
                                <a onClick={() => scrollTo('#sec1')} className="">Superhero</a>
                            </li>
                            <li className={`transition-all duration-500 ease-in-out ${active === 1 ? 'text-2xl sm:text-5xl lg:text-7xl font-bold' : 'text-xl sm:text-4xl opacity-60'}`}>
                                <a onClick={() => scrollTo('#sec2')} className="">Humor</a>
                            </li>
                            <li className={`transition-all duration-500 ease-in-out ${active === 2 ? 'text-2xl sm:text-5xl lg:text-7xl font-bold' : 'text-xl sm:text-4xl opacity-60'}`}>
                                <a onClick={() => scrollTo('#sec3')} className="">Slice-of-Life</a>
                            </li>
                            <li className={`transition-all duration-500 ease-in-out ${active === 3 ? 'text-2xl sm:text-5xl lg:text-7xl font-bold' : 'text-xl sm:text-4xl opacity-60'}`}>
                                <a onClick={() => scrollTo('#sec4')} className="">Science-Fiction/Fantasy</a>
                            </li>
                            <li className={`transition-all duration-500 ease-in-out ${active === 4 ? 'text-2xl sm:text-5xl lg:text-7xl font-bold' : 'text-xl sm:text-4xl opacity-60'}`}>
                                <a onClick={() => scrollTo('#sec5')} className="">Non-fiction</a>
                            </li>
                            <li className={`transition-all duration-500 ease-in-out ${active === 5 ? 'text-2xl sm:text-5xl lg:text-7xl font-bold' : 'text-xl sm:text-4xl opacity-60'}`}>
                                <a onClick={() => scrollTo('#sec6')} className="">Horror</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div id='sec1' ref={slidesRef1} className={`featured lg:bg-fixed bg-cover min-h-screen transition-all duration-500 ease-out ${ active === 0 ? 'opacity-50' : 'opacity-20'}`} style={{backgroundImage: `url(${featuredmagic1})`}}></div> 
                <div id='sec2' ref={slidesRef2} className={`featured lg:bg-fixed bg-cover min-h-screen transition-all duration-500 ease-out ${ active === 1 ? 'opacity-50' : 'opacity-20'}`} style={{backgroundImage: `url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`}}></div> 
                <div id='sec3' ref={slidesRef3} className={`featured lg:bg-fixed bg-cover min-h-screen transition-all duration-500 ease-out ${ active === 2 ? 'opacity-50' : 'opacity-20'}`} style={{backgroundImage: `url(${featuredmagic2})`}}></div> 
                <div id='sec4' ref={slidesRef4} className={`featured lg:bg-fixed bg-cover min-h-screen transition-all duration-500 ease-out ${ active === 3 ? 'opacity-50' : 'opacity-20'}`} style={{backgroundImage: `url(${featuredmagic3})`}}></div> 
                <div id='sec5' ref={slidesRef4} className={`featured lg:bg-fixed bg-cover min-h-screen transition-all duration-500 ease-out ${ active === 4 ? 'opacity-50' : 'opacity-20'}`} style={{backgroundImage: `url(${featuredmagic4})`}}></div> 
                <div id='sec6' ref={slidesRef4} className={`featured lg:bg-fixed bg-cover min-h-screen transition-all duration-500 ease-out ${ active === 5 ? 'opacity-50' : 'opacity-20'}`} style={{backgroundImage: `url(${featuredmagic5})`}}></div> 
            
            </div>
        </section>
    )
}

export default FeaturedMagic;