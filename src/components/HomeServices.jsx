import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import battery from "../assets/images/battery.svg";
import batteryJumpstart from "../assets/images/batteryJumpstart2.png";
import batteryJumpstartSmal from "../assets/images/batteryJumpstart2.png";
import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/arrowRight.png";
import flatTyre from "../assets/images/flatTyre.SVG";
import EmergencyFuel from "../assets/images/EmergencyFuel.SVG";
import carTowing from "../assets/images/carTowing.SVG";

export default function HomeServices() {
  const servicesContent = [
    {
      arrowLeft: arrowLeft,
      arrowRight: arrowRight,
      mainImg: batteryJumpstart,
      mobileImg: batteryJumpstartSmal,
      imgTop: battery,
      title: "Battery Jump Start",
      info: "If you're dealing with a dead car battery or a dead bike battery, we're the battery jump starter service you need. Let us get you back on the move!",
    },
    {
      arrowLeft: arrowLeft,
      arrowRight: arrowRight,
      mainImg: batteryJumpstart,
      mobileImg: batteryJumpstartSmal,
      imgTop: flatTyre,
      title: "Puncture & Flat Tyre Services",
      info: "Whether you need a tubeless tire puncture repair, air fill, or a spare tire change, why search for a puncture shop when RESCUE comes to your location? We ensure you keep moving!",
    },
    {
      arrowLeft: arrowLeft,
      arrowRight: arrowRight,
      mainImg: batteryJumpstart,
      mobileImg: batteryJumpstartSmal,
      imgTop: EmergencyFuel,
      title: "Emergency Fuel Delivery",
      info: "Whenever you find yourself stranded with an empty fuel tank, we are the online petrol delivery service you've been seeking. Let us get you back on the move!",
    },
    {
      arrowLeft: arrowLeft,
      arrowRight: arrowRight,
      mainImg: batteryJumpstart,
      mobileImg: batteryJumpstartSmal,
      imgTop: carTowing,
      title: "Car Towing Services",
      info: "For all your towing needs, we are the expert car towing service you've been searching for. Our specialized flatbed four-wheeler trucks are equipped to tow any car securely. Get back on the road with us!",
    },
  ];
  return (
    <>
      <Swiper
        centeredSlides={true}
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
        {servicesContent.map((service, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="serviceTop">
                <div className="jumpStart">
                  <div className="black">
                    <img src={service.imgTop} />
                  </div>
                  <div className="red">
                    <h4>{service.title}</h4>
                    <p>{service.info}</p>
                  </div>
                </div>
                <h3>+ Our Services</h3>
              </div>

              <div className="serviceBottom">
                <div className="largeImg">
                  <img src={service.mainImg} />
                </div>
                <div className="smallImg">
                  <img src={service.mobileImg} />
                </div>
              </div>

              <div className="arrows">
                <div>
                  <img src={service.arrowLeft} />
                </div>
                <div>
                  <img src={service.arrowRight} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
