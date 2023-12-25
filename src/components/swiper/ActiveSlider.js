import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { tickets } from 'utilities/constants'
import { StarIcon } from '@heroicons/react/outline';


const activeSlider = () => {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            watchSlidesProgress
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => { }}
            onSlideChange={() => { }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            dir="ltr"
            breakpoints={{
                1320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }}
            loop={true}
        >
            {
                tickets.map(item =>
                    <SwiperSlide key={item.id} className="relative swiper__item p-8">
                        <div className="flex flex-col">
                            <p className="text-sm">
                                {item.name}
                            </p>
                            <p className="text-xs text-[#8c8c8e] mb-4">
                                {item.role}
                            </p>
                            <span className="text-xs md:text-sm text-[#8c8c8e] mb-3">
                                {item.Message}
                            </span>
                            <i className="w-24 flex items-center justify-center bg-[#191923] h-6 p-2 text-sm rounded-xl">
                                {
                                    [...Array(item.stars)].map((e, i) => {
                                        return <StarIcon className="w-7 fill-[#ffc107] stroke-[#191923]" key={i} />
                                    })
                                }
                            </i>
                        </div>
                        <div className="absolute ticket__user-image right-6 z-50 w-16 h-16 ">
                            <img src={item.image} className="flex h-full w-full rounded-full" />
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper >
    )
}

export default activeSlider
