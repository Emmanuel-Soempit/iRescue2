import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

import HeroImg2 from "../assets/images/heroImg2.png";
import '../stylings/dashboard.css'

export default function HeroSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="img" src={HeroImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img"  src={HeroImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img"  src={HeroImg2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
