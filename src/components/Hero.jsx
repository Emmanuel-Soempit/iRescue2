import googlePlay from "../assets/images/playStore2.svg";
import appStore from "../assets/images/appStore2.svg";
import HeroSlider from "../components/heroSlider";
import flatTowing from "../assets/images/flatTowing.svg";
import ambulance from "../assets/images/ambulance.png";
import parking from "../assets/images/parking.png";
import downAngle from "../assets/images/downAngle.svg";
import { TypeAnimation } from "react-type-animation";
import { Slide, Bounce } from "react-awesome-reveal";
import HeroInputElem from "../components/heroInput";
import AddressAutoComplete from "./addressAutoComplete";
const Hero = () => {
  return (
    <>
      <div className="heroEllipse"></div>
      <div className="heroSection">
        <div className="heroLeft">
          <div className="dropdown">
            <p>
              Request <img src={downAngle} alt="" />
            </p>
            <div className="dropdown-options">
              <div>
                <img src={ambulance} />
                <a href="#">Ambulance</a>
              </div>
              <div>
                <img src={flatTowing} />
                <a href="#">Tow a Car</a>
              </div>
              <div>
                <img src={parking} />
                <a href="#">IRezone</a>
              </div>
            </div>
          </div>
          <div>
            <h1>
              <TypeAnimation
                sequence={[
                  "Tow Anywhere With iRescue",
                  2000,
                  "Seek a tow with just one request",
                  2000,
                  "Enter your location to get towing",
                  2000,
                ]}
                wrapper="span"
                speed={30}
              />
            </h1>
          </div>

          <AddressAutoComplete isDashboar={false} />
        </div>

        <div className="Heroright">
          <div className="heroImg">
            <HeroSlider />
          </div>

          <div className="appDownloads">
            <Slide direction={"right"} cascades duration={2000}>
              <div>
                <a href="#">
                  <img src={googlePlay} />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={appStore} />
                </a>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
