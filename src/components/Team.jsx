import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import team1 from '../../assets/img/team1.png';
import team2 from '../../assets/img/team2.png';
import team3 from '../../assets/img/team3.png';


const teamData = [

    {
        name: 'Femi Olowonefa',
        title: 'Engineer',
        imgUrl: team1
    },
    {
        name: 'Alec Baldwin',
        title: 'Engineer',
        imgUrl: team2
    },
    {
        name: 'Alec Baldwin',
        title: 'Engineer',
        imgUrl: team3
    },
    {
        name: 'Femi Olowonefa',
        title: 'Engineer',
        imgUrl: team1
    },
    {
        name: 'Alec Baldwin',
        title: 'Engineer',
        imgUrl: team2
    },
    {
        name: 'Alec Baldwin',
        title: 'Engineer',
        imgUrl: team3
    },
    
];

const Team = () => {

    const titleRef = React.useRef();
    const mbsRef = React.useRef([]);

    React.useEffect(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                toggleActions: 'restart none none reset'
            },
            y: 20,
            duration: 1
        })
        // .from(iconRef.current,{ opacity: 0, duration: 1, delay: 0.3 });
    }, []);

    React.useEffect(() => {
        const targets = gsap.utils.toArray('.wrap_member');
        targets.map((itm, idx) => {
            gsap.from(itm, {
                scrollTrigger: {
                    trigger: itm,
                    toggleActions: 'restart none none reset',
                },
                duration: 3,
                opacity: 0
            })
        });
    },[]);

    console.log(mbsRef.current);

    return (
        <section className="relative z-10 bg-dark pb-10">
            <div className="w-[70%] mx-auto">

                <div className="my-10 overflow-hidden">
                    <h1 ref={titleRef} className="text-2xl sm:text-5xl font-bold">Meet the team</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                    {
                        teamData.map((mb, idx) => (
                            <div key={idx} ref={mbsRef.current[idx]} className="wrap_member text-center">
                                <div className="rounded-lg w-full">
                                    <img src={mb.imgUrl} alt="Profile Pic" className="w-full max-w-full max-h-full" />
                                </div>
                                <h2 className="text-lg font-semibold pt-2">{mb.name}</h2>
                                <p className="text-[#B1B1B5]">{mb.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;