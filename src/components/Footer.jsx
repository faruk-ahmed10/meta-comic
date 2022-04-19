import React from 'react';
import { RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';


const Footer = () => {


    return (
        <section className="w-full bottom-0 left-0 -z-0 bg-dark">
            <div className="w-[80%] pt-5 sm:py-10 mx-auto border-t border-white/20">
                <div className="sm:flex">
                    <div className="md:w-2/6 flex justify-center">
                        <div className="">
                            <h1 className="text-3xl uppercase font-medium tracking-widest">METACOMIC</h1>
                            <div className="flex justify-center items-center gap-3 mt-3">
                                <a href='#' className="w-10 h-10 rounded-full flex justify-center items-center text-xl hover:text-4xl transition-all duration-300 ease-in-out text-primary bg-primary/10">
                                    <FaTelegramPlane />
                                </a>
                                <a href='#' className="w-10 h-10 rounded-full flex justify-center items-center text-xl hover:text-4xl transition-all duration-300 ease-in-out text-primary bg-primary/10">
                                    <RiTwitterFill />
                                </a>
                                <a href='#' className="w-10 h-10 rounded-full flex justify-center items-center text-xl hover:text-4xl transition-all duration-300 ease-in-out text-primary bg-primary/10">
                                    <RiInstagramLine />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#F1F1F1] mt-3 sm:ml-10">
                        <ul className="text-xs text-center sm:text-left leading-5">
                            <li className=""><a href="" className="">Token</a></li>
                            <li className=""><a href="" className="">Audit</a></li>
                            <li className=""><a href="" className="">Team</a></li>
                        </ul>
                    </div>
                    <div className="text-[#F1F1F1] sm:mt-3 sm:ml-20">
                        <ul className="text-xs text-center sm:text-left leading-5">
                            <li className=""><a href="" className="">Litepaper</a></li>
                            <li className=""><a href="" className="">Roadmap</a></li>
                            <li className=""><a href="" className="">Join Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-xs text-center py-5">
                <p className="text-[#676767]">&copy; Metacomic 2021. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;