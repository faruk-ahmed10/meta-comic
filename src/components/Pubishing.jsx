import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// importing assets
import bgPublish from '../../assets/img/bgPublish.png';


const Publishing = () => {

    const [active, setActive] = React.useState(false);
    const publishRef = React.useRef();

    React.useEffect(() => {
        ScrollTrigger.create({
            trigger: publishRef.current,
            start: "top center",
            scrub: true,
            onEnter: () => setActive(true),
            onEnterBack: () => setActive(true),
            onLeave: () => setActive(false),
            onLeaveBack: () => setActive(false),
        });
    },[]);

    return (
        <section id='publishing' ref={publishRef} className={`${active ? 'opacity-100' : 'opacity-0' } transition-all duration-500 ease-in-out relative min-h-screen overflow-hidden bg-cover bg-fixed z-0`} style={{backgroundImage: `url('${bgPublish}')`}}>
            <div className="w-full min-h-screen bg-black/60 flex justify-center items-center px-10">
                <div className="space-y-5">
                    <div className="">
                        <h1 className="text-5xl sm:text-6xl text-center md:text-left md:text-7xl lg:text-8xl font-bold">
                            The<br/>
                            Blockchain<br/>
                            Publishing
                        </h1>
                    </div>
                    <div className="">
                        <div className="md:w-1/2 text-center md:text-left ml-auto space-y-2">
                            <h5 className="font-medium text-secondary">tagged in one line</h5>
                            <h2 className="text-xl sm:text-3xl font-medium">Comic on blockchain</h2>
                            <p className="text-sm sm:text-base">
                                Collaborating with clients and agencies across industries
                                to empower brands to communicate better, faster and sustainable, through a digital production pipeline, in an era of always-on content
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publishing;