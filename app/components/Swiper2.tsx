"use client"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const slidesContent = [
  {
    title: "slide 1",
    description: "description 1",
    image: "../image.jpg",
  },
  {
    title: "slide 2",
    description: "description 2",
    image: "../image2.jpg",
  },
]

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2000,
      }}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-[500px] bg-slate-400"
    >
      {slidesContent.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img src={slide.image} alt="" />
          <div className="text-zink-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-4">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
