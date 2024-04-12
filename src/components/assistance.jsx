import crane from "../assets/images/crane.png";
import calendar from "../assets/images/calendar.png";
import thumbsUp from "../assets/images/thumbsUp.png";
import SmallScreen from "./smallAsistanceSlide";
import arrowRight from "../assets/images/arrowRightSmall.png";
import { Slide, Bounce, Fade } from "react-awesome-reveal";

export default function Assistance() {
  const contents = [
    { title: "24/7", info: "service", image: crane },
    { title: "24/7", info: "Assistance", image: calendar },
    { title: "Satisfaction", info: "Guaranteed", image: thumbsUp },
  ];
  return (
    <>
      <div className="assistWrapper">
        <Bounce cascade damping={0.3} duration={2000}>
          {contents.map((content, index) => {
            return (
              <div className={`card ${index === 1 && "info"}`} key={index}>
                <div>
                  <img src={content.image} />
                </div>
                <div>
                  <h2>{content.title}</h2>
                  <h3>{content.info}</h3>
                </div>
              </div>
            );
          })}
        </Bounce>
      </div>

      <div className="smallScreenWrapper">
        <div className="sliderArrow">
          <img src={arrowRight} />
        </div>
        <SmallScreen />
      </div>
    </>
  );
}
