import React from 'react';
import { FaBorderNone } from 'react-icons/fa';
import Slider from 'react-slick';


import bookslide1 from '../../assets/bookslide/bookslide1.png';


const BookSlide = () => {

    const settings = {
        className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "200px",
      slidesToShow: 1,
      speed: 1000,
      cssEase: 'ease-in-out',
      arrows: true,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  centerPadding: '150px'
              }
          },
          {
              breakpoint: 640,
              settings: {
                  centerPadding: '80px'
              }
          },
          {   
              breakpoint: 480,
              settings: {
                  centerPadding: "50px"
              }
          }
      ]
    }
    

    return (
        <div id='bookSlide' className="min-h-screen max-h-screen py-14 overflow-hidden">
            <div className="">
                {/* <Slider {...settings} className="w-full" >
                    {
                        Array(5).fill('').map( (v, idx) => (
                            <div key={idx} className="w-full h-full relative slide text-center px-10">
                                <div className="family absolute left-0 top-0 bg-[#1F1C2C] w-5 sm:w-10 h-full flex gap-2 items-center uppercase">
                                    <div className="w-full h-full flex justify-center items-center transform rotate-90">
                                        <h3 className="text-[8px] sm:text-xs">family</h3>
                                        <h1 classNpame="pl-2 text-[10px] sm:text-lg">karsten</h1>
                                    </div>
                                </div>
                                <div className="w-full h-full max-w-[100vw]">
                                    <img src={bookslide1} alt="" className="max-w-full w-full h-full max-h-full object-fit" />
                                </div>
                                <div className="family absolute right-0 top-0 bg-[#1F1C2C] w-10 h-full flex gap-2 items-center uppercase">
                                    <div className="w-full h-full flex justify-center items-center transform rotate-90">
                                        <h1 className="text-lg">karsten</h1>
                                        <h3 className="pl-2 text-xs">family</h3>
                                    </div>
                                </div>
                            </div>

                        ) )
                    
                    }
                </Slider> */}
                <Slider {...settings}>

                    
                    <div className='relative text-center transition-all duration-500 ease-in-out'>
                        <div className="family absolute left-0 top-0 bg-[#1F1C2C] w-5 sm:w-10 h-full flex gap-2 items-center uppercase">
                            <div className="w-full h-full flex justify-center items-center transform rotate-90">
                                <h3 className="text-[8px] sm:text-xs">family</h3>
                                <h1 classNpame="pl-2 text-[10px] sm:text-lg">karsten</h1>
                            </div>
                        </div>
                        <div className="w-full min-h-full">
                            <img src={bookslide1} alt="" className="max-w-full w-full h-full min-h-full object-cover" />
                        </div>
                        <div className="family absolute right-0 top-0 bg-[#1F1C2C] w-5 sm:w-10 h-full flex gap-2 items-center uppercase">
                            <div className="w-full h-full flex justify-center items-center transform rotate-90">
                                <h1 classNpame="text-[10px] sm:text-lg">karsten</h1>
                                <h3 className="text-[8px] pl-2 sm:text-xs">family</h3>
                            </div>
                        </div>
                    </div>


                    <div className='relative text-center transition-all duration-500 ease-in-out'>
                        <div className="family absolute left-0 top-0 bg-[#1F1C2C] w-5 sm:w-10 h-full flex gap-2 items-center uppercase">
                            <div className="w-full h-full flex justify-center items-center transform rotate-90">
                                <h3 className="text-[8px] sm:text-xs">family</h3>
                                <h1 classNpame="pl-2 text-[10px] sm:text-lg">karsten</h1>
                            </div>
                        </div>
                        <div className="w-full min-h-full">
                            <img src={bookslide1} alt="" className="max-w-full w-full h-full min-h-full object-cover" />
                        </div>
                        <div className="family absolute right-0 top-0 bg-[#1F1C2C] w-5 sm:w-10 h-full flex gap-2 items-center uppercase">
                            <div className="w-full h-full flex justify-center items-center transform rotate-90">
                                <h1 classNpame="text-[10px] sm:text-lg">karsten</h1>
                                <h3 className="text-[8px] pl-2 sm:text-xs">family</h3>
                            </div>
                        </div>
                    </div>

                    <div className='relative text-center transition-all duration-500 ease-in-out'>
                        <div className="family absolute left-0 top-0 bg-[#1F1C2C] w-5 sm:w-10 h-full flex gap-2 items-center uppercase">
                            <div className="w-full h-full flex justify-center items-center transform rotate-90">
                                <h3 className="text-[8px] sm:text-xs">family</h3>
                                <h1 classNpame="pl-2 text-[10px] sm:text-lg">karsten</h1>
                            </div>
                        </div>
                        <div className="w-full min-h-full">
                            <img src={bookslide1} alt="" className="transition-all duration-500 ease-in-out max-w-full w-full h-full min-h-full object-cover" />
                        </div>
                        <div className="family absolute right-0 top-0 bg-[#1F1C2C] w-5 sm:w-10 h-full flex gap-2 items-center uppercase">
                            <div className="w-full h-full flex justify-center items-center transform rotate-90">
                                <h1 classNpame="text-[10px] sm:text-lg">karsten</h1>
                                <h3 className="text-[8px] pl-2 sm:text-xs">family</h3>
                            </div>
                        </div>
                    </div>
                    
                    
                </Slider>
            </div>
        </div>
    )
}

export default BookSlide;