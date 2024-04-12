import crane from "../assets/images/crane.png";
import calendar from "../assets/images/calendar.png";
import thumbsUp from "../assets/images/thumbsUp.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function SmallScreen() {
  const contents = [
    { title: "24/7", info: "service", image: crane },
    { title: "24/7", info: "Assistance", image: calendar },
    { title: "Satisfaction", info: "Guaranteed", image: thumbsUp },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {contents.map((content, index) => {
          return (
            <SwiperSlide>
              <div className={`card ${index === 1 && "info"}`} key={index}>
                <div>
                  <img src={content.image} />
                </div>
                <div>
                  <h2>{content.title}</h2>
                  <h3>{content.info}</h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
