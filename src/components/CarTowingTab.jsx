import { Slide, Bounce, Fade } from "react-awesome-reveal";

export default function CarTowingTab() {
  const contentList = [
    {
      title: "Drive More, Earn More",
      info: "With over 198 million car owners in Nigeria, numerous tow requests will come your way. Capitalize on peak demand to boost your earnings.",
    },
    {
      title: "Define your timetable. ",
      info: "Tow whenever and as frequently as you desire. Whether it's weekdays, weekends, or evenings, customize your driving schedule to accommodate your lifestyle.",
    },
    {
      title: "Get paid daily",
      info: "Receive daily payments. Your earnings will be delivered at the conclusion of each day, eliminating the need to wait for payday.",
    },
  ];
  return (
    <>
      <Fade cascade duration={1000}>
        <ol className="ordered-list">
          {contentList.map((content, index) => {
            return (
              <div key={index}>
                <li>
                  <div className="custom-numbering">{index + 1}</div>
                  {content.title}
                </li>
                <p>{content.info}</p>
              </div>
            );
          })}
        </ol>
      </Fade>
      <Slide direction={"right"} delay={1500}>
        <button>Learn More</button>
      </Slide>
    </>
  );
}
