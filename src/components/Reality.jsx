import React from 'react';
import reality from '../../assets/img/reality.png';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const settings1 = {

    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 2500,
    arrows: false,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
    ]

  };
const settings2 = {

    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 4500,
    autoplaySpeed: 2300,
    arrows: false,
    cssEase: "linear",
    responsive: [
          
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
    ]

  };
const settings3 = {

    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    speed: 5500,
    autoplaySpeed: 2800,
    arrows: false,
    cssEase: "linear",
    responsive: [
         
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
    ]

  };


const Reality = () => {

    const realityRef = React.useRef();
    const titleRef = React.useRef();
    const subRef = React.useRef();
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                toggleActions: 'restart none none restart'
            },
        })
        .from(titleRef.current, {
            y: 100,
            duration: 1
        })
        .from(subRef.current, {
            opacity: 0,
            duration: 1
        });

        ScrollTrigger.create({
            trigger: realityRef.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActive(true),
            onLeave: () => setActive(false),
            onEnterBack: () => setActive(true),
            onLeaveBack: () => setActive(false)
        });
    },[])


    return (
        <section ref={realityRef} className={`relative z-10 bg-[#A3320D] min-h-screen py-14 transition-all duration-500 ease-in-out ${active ? 'opacity-100': 'opacity-0'}`}>
            <div className="sm:flex justify-between items-center px-10">
                <div className="">
                    <div className="overflow-hidden">
                        <h1 ref={titleRef} className="text-2xl sm:text-5xl font-bold">The New Reality</h1>
                    </div>
                    <p ref={subRef} className="text-sm md:text-lg uppercase py-2">ARTIST SOUL, CUTTING EDGE TECHNOLOGY, BLOCKCHAIN DNA.</p>
                </div>
                <div className="">
                    <img src={reality} alt="" className="" />
                </div>
            </div>
            <div className="relative w-full flex mt-10 py-5">
                <div className="absolute top-0 left-0 w-28 z-10 h-full min-h-full bg-gradient-to-r to-transparent from-[#952515]"></div>
                <div className="w-full overflow-hidden">
                    <div className="w-full">
                        <Swiper
                        slidesPerView={3}
                        loop={true}
                        speed={10000}
                        grabCursor={true}
                        autoplay = {{
                            delay: 1,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay, FreeMode]}
                        >
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                        ...
                        </Swiper>
                    </div>

                    <div className="w-full">
                        <Swiper
                        slidesPerView={3}
                        loop={true}
                        speed={8000}
                        grabCursor={true}
                        autoplay = {{
                            delay: 1,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay, FreeMode]}
                        >
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                        ...
                        </Swiper>
                    </div>

                    <div className="w-full">
                        <Swiper
                        slidesPerView={3}
                        loop={true}
                        speed={9000}
                        grabCursor={true}
                        autoplay = {{
                            delay: 1,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay, FreeMode]}
                        >
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                            <SwiperSlide><p className="text-xl font-semibold whitespace-nowrap">Publish comic books your way</p></SwiperSlide>
                        ...
                        </Swiper>
                    </div>

                </div>
                <div className="absolute top-0 right-0 w-28 z-10 h-full min-h-full bg-gradient-to-r from-transparent to-[#952515]"></div>
            </div>
        </section>
    )
}

export default Reality;