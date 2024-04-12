import Vector from "../assets/images/Vector.png";
import naira from "../assets/images/naira.png";
import s from "../stylings/subscription.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function SubscriptionSmallScreen() {
  const subCards = [
    {
      title: "PREMIUM PLAN",
      naira: naira,
      price: "64,000.00",
      days: "365 days",
      Vector: Vector,
      benefits: ["Accidental Towing"],
      popular: "",
      class: "space",
    },
    {
      title: "PLATINUM PLAN",
      naira: naira,
      price: "120,000.00",
      days: "365 days",
      Vector: Vector,
      benefits: [
        "Flat Tyre (Tube)",
        "Flat Tyre (Tubeless)",
        "Battery Jumpstart",
        "Battery Swapping",
        "Custody Service",
        "Starting Problem",
      ],
      popular: "MOST POPULAR",
      class: "noSpace",
    },
    {
      title: "QUANTUM PLAN",
      naira: naira,
      price: "250,000.00",
      days: "365 days",
      Vector: Vector,
      benefits: [
        "Flat Tyre (Tube)",
        "Flat Tyre (Tubeless)",
        "Battery Jumpstart",
        "Battery Swapping",
        "Custody Service",
        "Starting Problem",
      ],
      popular: "MOST POPULAR",
      class: "noSpace",
    },
  ];

  return (
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
      modules={[Autoplay]}
      className="mySwiper"
    >
      {subCards.map((subCard, index) => (
        <SwiperSlide key={index}>
          <div className={`${s.subcard} ${s[subCard.class]}`}>
            <div>{subCard.popular}</div>
            <h2>{subCard.title}</h2>
            <h4>
              <img src={subCard.naira} alt="" />
              <span>{subCard.price}</span>
            </h4>
            <p>{subCard.days}</p>

            <ul>
              {subCard.benefits.map((benefit, index) => {
                return (
                  <li key={index}>
                    <span>
                      <img src={subCard.Vector} alt="" />
                    </span>
                    {benefit}
                  </li>
                );
              })}
            </ul>
            <button>Buy Plan</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
