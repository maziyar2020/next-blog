import Link from 'next/link';
// typewriter
import Typewriter from 'typewriter-effect';
// counter 
import CountUp from 'react-countup';
// swiper
import ActiveSlider from '../swiper/ActiveSlider';
// icons
import { TiTick } from "react-icons/ti";
import { FaX } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="hero__content px-8 pb-6 overflow-hidden outline-none pt-5 relative" >
            <div className=" relative overflow-hidden w-full">
                <div className="py-6">
                    <div className="grid-cols-12">
                        <div className="hero__wrap">
                            <div className="hero__header-text flex flex-col items-center justify-center md:items-baseline md:justify-normal px-5 py-12 md:p-14">
                                {/* big text */}
                                <div className='self-start mb-4 text-large sm-text-xl md:text-4xl font-extrabold text-center md:text-start w-full '>
                                    Discover My Amazing
                                    Art Work!
                                </div>
                                {/* small text */}
                                <div className="flex text-normal md:text-xl mb-6">
                                    <p className="mr-1">I Am</p>
                                    <span className="text-large md:text-xl text-[#ffc107]">
                                        <Typewriter options={{
                                            strings: ["Front-End DeV", "Mid-Lvl Coder", 'Fast Learner', 'Self Learner'],
                                            autoStart: true,
                                            loop: true,
                                        }} /></span>
                                </div>
                                {/* button */}
                                <Link href="/blogs">
                                    <a >
                                        <button
                                            className='md:w-48 md:h-14 w-28 h-10 rounded-md bg-transparent text-sm md:text-lg font-medium text-[#ffc107] hero__button '>بازدید از بلاگ</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative mb-2" style={{ direction: 'rtl' }}>
                {/* hero counter */}
                <div className="hero__counter p-4 grid md:grid-cols-4 lg:grid-cols-12 w-full min-h-[60px] ">
                    {/* hero counter items */}
                    <div className="hero__counter-item lg:pl-8pl-8 md:p-5 col-span-4  items-stretch relative">
                        <div className="counter-divider absolute bottom-0 right-0 left-0 md:flex lg:hidden " />
                        <div className="w-full grid lg:grid-cols-[1fr] p-4 ">

                            <p className="text-center  mb-3">تجربه شغلی</p>

                            <div className="flex flex-row justify-center w-full ">
                                <p className="ml-3 text-[#ffc107]">
                                    <CountUp end={20} duration={3.2} delay={1} /> +
                  </p>
                                <span className="text-[#ffc107] text-sm mt-0.5">ماه</span>
                            </div>

                        </div>
                    </div>
                    {/* counter 1 end */}
                    <div className="hero-item lg:pl-8 md:p-5 col-span-4  items-stretch relative">
                        <div className="counter-divider absolute bottom-0 right-0 left-0 md:flex lg:hidden " />
                        <div className="w-full grid lg:grid-cols-[1fr] p-4">

                            <p className="text-center mb-3">پروژه موفق</p>

                            <div className="flex flex-row justify-center w-full ">
                                <p className="ml-3 text-[#ffc107]">
                                    <CountUp end={400} duration={3.2} delay={1} /> +
                  </p>
                                <span className="text-[#ffc107] text-sm mt-0.5">پروژه</span>
                            </div>

                        </div>
                    </div>
                    {/* counter 2 end */}
                    <div className="hero__counter-item lg:pl-8pl-8 md:p-5 col-span-4  items-stretch relative">
                        <div className="w-full grid lg:grid-cols-[1fr] p-4">

                            <p className="text-center mb-3">مشتریان راضی</p>

                            <div className="flex flex-row justify-center w-full ">
                                <p className="ml-3 text-[#ffc107]">
                                    <CountUp end={150} duration={3.2} delay={1} /> +
                  </p>
                                <span className="text-[#ffc107] text-sm mt-0.5">نفر</span>
                            </div>

                        </div>
                    </div>
                    {/* counter 3 end */}
                </div>
                {/* services */}
                <div className="services mt-6" style={{ direction: 'ltr' }}>
                    <h2 className="text-lg text-[#cececa] mb-4 text-left">services</h2>
                    <div
                        className="services-items 
              grid 
              grid-cols-[1fr]
              xl:grid-cols-[repeat(3,1fr)]
              lg:grid-cols-[repeat(2,1fr)]
              md:grid-cols-[repeat(2,1fr)]
              gap-6"
                    >
                        <div className="services-item flex flex-col p-8 rounded">
                            <p className="text-white mb-2">Web Development</p>
                            <span className="text-[#8c8c8e] mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</span>
                            <p className="text-[#ffc107] text-sm">order now {">"}  </p>
                        </div>
                        <div className="services-item flex flex-col p-8 rounded">
                            <p className="text-white mb-2">UI/UX Design</p>
                            <span className="text-[#8c8c8e] mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</span>
                            <p className="text-[#ffc107] text-sm">order now {">"}  </p>
                        </div>
                        <div className="services-item flex flex-col p-8 rounded">
                            <p className="text-white mb-2">Sound Design</p>
                            <span className="text-[#8c8c8e] mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</span>
                            <p className="text-[#ffc107] text-sm">order now {">"}  </p>
                        </div>
                        <div className="services-item flex flex-col p-8 rounded">
                            <p className="text-white mb-2">Game Design</p>
                            <span className="text-[#8c8c8e] mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</span>
                            <p className="text-[#ffc107] text-sm">order now {">"}  </p>
                        </div>
                        <div className="services-item flex flex-col p-8 rounded">
                            <p className="text-white mb-2">Advertising</p>
                            <span className="text-[#8c8c8e] mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</span>
                            <p className="text-[#ffc107] text-sm">order now {">"}  </p>
                        </div>
                        <div className="services-item flex flex-col p-8 rounded">
                            <p className="text-white mb-2">Photography</p>
                            <span className="text-[#8c8c8e] mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</span>
                            <p className="text-[#ffc107] text-sm">order now {">"}  </p>
                        </div>
                    </div>
                </div>
                <div className="hero__plans mt-6" style={{ direction: 'ltr' }}>
                    <h2 className="text-lg text-[#cececa] mb-4">Plans</h2>
                    <div className="hero__plans-items grid gap-6
              grid-cols-[1fr]
              xl:grid-cols-[repeat(3,1fr)]
              lg:grid-cols-[repeat(2,1fr)]
              md:grid-cols-[1fr]
              ">
                        {/* item1 */}
                        <div className="flex flex-col p-8 hero__plans-item rounded">
                            <p className="text-center text-sm mb-8">Starter Price</p>
                            <div className="flex justify-center items-center mb-5">
                                <p className="text-xs mb-1">$</p>
                                <p className="text-[#ffc107] mx-5 text-3xl font-bold">FREE</p>
                                <p>Hour</p>
                            </div>
                            <ul className="flex flex-col items-center hero__plans-item__list mb-4">
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">Ui Design</p>
                                </li>
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">Web Development</p>
                                </li>
                                <li className="flex mb-2">
                                    <FaX className="mt-1 mr-1 fill-[#ffc107]" size={12} />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">Logo design</p>
                                </li>
                                <li className="flex mb-2">
                                    <FaX className="mt-1 mr-1 fill-[#ffc107]" size={12} />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">SEO optimization</p>
                                </li>
                                <li className="flex mb-2">
                                    <FaX className="mt-1 mr-1 fill-[#ffc107]" size={12} />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">WordPress integration</p>
                                </li>
                            </ul>
                            <p className="text-[#ffc107] text-sm text-center">order now {">"}  </p>
                        </div>
                        {/* item 2 */}
                        <div className="flex flex-col p-8 hero__plans-item rounded relative lg:scale-100 xl:scale-105">
                            <div className="pop-up absolute bg-[#ffc107] text-right pr-12 pt-0.5 text-sm">
                                Popular
                </div>
                            <p className="text-center text-sm mb-8">Starter Price</p>
                            <div className="flex justify-center items-center mb-5">
                                <p className="text-xs mb-1">$</p>
                                <p className="text-[#ffc107] ml-4 mr-2 mb-2 text-4xl eng font-medium">54</p>
                                <p>Hour</p>
                            </div>
                            <ul className="flex flex-col items-center hero__plans-item__list mb-4">
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">Ui Design</p>
                                </li>
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">Web Development</p>
                                </li>
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">Logo design</p>
                                </li>
                                <li className="flex mb-2">
                                    <FaX className="mt-1 mr-1 fill-[#ffc107]" size={12} />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">SEO optimization</p>
                                </li>
                                <li className="flex mb-2">
                                    <FaX className="mt-1 mr-1 fill-[#ffc107]" size={12} />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">WordPress integration</p>
                                </li>
                            </ul>
                            <p className="text-[#ffc107] text-sm text-center">order now {">"}  </p>
                        </div>
                        {/* item 3 */}

                        <div className="flex flex-col p-8 hero__plans-item rounded test">
                            <p className="text-center text-sm mb-8">Starter Price</p>
                            <div className="flex justify-center items-center mb-5">
                                <p className="text-xs mb-1">$</p>
                                <p className="text-[#ffc107] ml-4 mr-2 mb-2 text-4xl eng font-medium">122</p>
                                <p>Hour</p>
                            </div>
                            <ul className="flex flex-col items-center hero__plans-item__list mb-4">
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">Ui Design</p>
                                </li>
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">Web Development</p>
                                </li>
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">Logo design</p>
                                </li>
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">SEO optimization</p>
                                </li>
                                <li className="flex mb-2">
                                    <TiTick size={15} className="mt-1 mr-1 fill-[#ffc107]" />
                                    <p className="mr-1 text-sm text-[#8c8c8e]">WordPress integration</p>
                                </li>
                            </ul>
                            <p className="text-[#ffc107] text-sm text-center">order now {">"}  </p>
                        </div>
                    </div>
                </div>
                <div className="swiper__wrap relative text-[#cececa] mt-12">
                    <h2 className="text-left mb-4 text-lg text-[#cececa]">Tickets</h2>
                    <ActiveSlider />
                </div>
                <div className="hero__footer 
                mt-4 grid
                grid-cols-[1fr] min-h-[50px] text-center items-center px-4 text-sm text-[#8c8c8e] sm:text-xs sm:text-center sm:grid-cols-[repeat(2,1fr)]">
                    <p>maziroadtodivine@gmail.com</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Hero
