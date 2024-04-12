import Header from "../components/Header";
import Logo from "../assets/images/brand.png";
import Subscriptionards from "../components/subscriptionPage/subscriptionCards";
import ContactUs from "../components/subscriptionPage/contactUs";
import HowTheAppWorks from "../components/subscriptionPage/howTheAppWorks";
import Footer from "../components/Footer";
import LottieAnimation from "../components/lottieAnimation";
import lottieDown from "../lottieDown.json";
import { TypeAnimation } from "react-type-animation";
import ParticlesBg from "../components/particlesBg";
import SubscriptionSmallScreen from "../components/smallSubscriptionSlide";
import s from "../../src/stylings/subscription.module.css";
import arrowRight from "../assets/images/arrowRightSmall.png";
import loadingLottie from "../loadingLottie.json";

export default function Subscription() {
  return (
    <>
      <ParticlesBg />
      <div className={s.header}>
        <Header logo={Logo} isFixed={false} linkColor="" />

        <div className={s.headerText}>
          <div className={s.heroEllipse}></div>
          <h1>
            <TypeAnimation
              sequence={[
                "Explore our variety of subscriptions",
                2000,
                "Pick a subscription and get started towing",
                2000,
              ]}
              wrapper="span"
              speed={30}
            />
          </h1>
          <p>Pick the one that suites your need</p>
          <div className="center">
            <LottieAnimation
              id="subscriptionLottie"
              animationData={lottieDown}
              loop
              autoplay
              width="120px"
              height="120px"
              margin-top="100px"
            />
          </div>
        </div>
      </div>

      <section className={s.subscriptionBack}>
        <div className={`${s.subcriptionTop}`}>
          <ul className="rightTop">
            <li>
              <a href="#">Car Towing</a>
            </li>
            <li>
              <a href="#">Ambulance Emergency</a>
            </li>
            <li>
              <a href="#">IRezone</a>
            </li>
          </ul>
        </div>

        <div className={`${s.subscriptionCards} container`}>
          <Subscriptionards />
        </div>

        <div className={s.subscriptionSmall}>
          <div className="sliderArrow">
            <img src={arrowRight} />
          </div>
          <SubscriptionSmallScreen />
        </div>
      </section>

      <section className={s.contactBack}>
        <ContactUs />
      </section>

      <section className={`${s.howTheAppWorks} container`}>
        <HowTheAppWorks />
      </section>

      <section className="footerBack">
        <div className="footer container">
          <Footer />
        </div>
      </section>
    </>
  );
}
