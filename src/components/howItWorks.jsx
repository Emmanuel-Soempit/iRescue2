import firstImg from "../assets/images/first.png";
import secondImg from "../assets/images/second.png";
import thirdImg from "../assets/images/third.png";
import fourthImg from "../assets/images/fourth.png";
import { Slide, Bounce } from "react-awesome-reveal";

export default function HowItWorks() {
  const contents = [
    {
      image: secondImg,
      title: "Choose a service.",
      info: "Select the service you need.",
    },
    {
      image: firstImg,
      title: "Time and Location",
      info: "Tell us when and where you want iRescue to provide the selected service.",
    },
    {
      image: thirdImg,
      title: "Confirmation",
      info: "Please confirm your request and select the preferred payment method.",
    },
    {
      image: fourthImg,
      title: "Stay ahead",
      info: "Monitor the real-time status and location of your vehicle.",
    },
  ];
  return (
    <>
      <Slide cascade duration={2000}>
        <div className="top">
          <p>HOW IT WORKS</p>
          <h2>Introducing your New Favorite Car Towing Experience</h2>
        </div>
      </Slide>

      <div className="cards">
        <Bounce cascade damping={0.3} duration={2000}>
          {contents.map((content, index) => {
            return (
              <div className="card" key={index}>
                <div className="cardImg">
                  <img src={content.image} />
                </div>
                <h3>{content.title}</h3>
                <p>{content.info}</p>
              </div>
            );
          })}
        </Bounce>
      </div>
    </>
  );
}
