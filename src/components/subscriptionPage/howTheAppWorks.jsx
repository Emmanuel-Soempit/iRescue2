import app from "../../assets/images/app2.png";
import s from "../../stylings/subscription.module.css";
import { Slide, Flip, Fade } from "react-awesome-reveal";

export default function HowTheAppWorks() {
  const contentList = [
    {
      title: "Real-Time Dispatch",
      info: "Get help quickly - simply tap your phone! get connected with a nearby towing Truck, available nationwide.",
    },
    {
      title: "Live Tracking",
      info: "Track the whereabouts of the recovery vehicle from the moment you book till the time of arrival and follow its location till your journey is completed.",
    },
    {
      title: "Great Rates",
      info: "Be protected against change in prices irrespective of the time of the day or the criticality of the situation.",
    },
  ];
  return (
    <>
      <div className={s.appLeft}>
        <div>
          <img src={app} />
        </div>
      </div>
      <div className={s.appRight}>
        <Slide direction={"right"} cascade duration={1000}>
          <h3>iRESCUE Connects you with TOW Truck Drivers 24/7</h3>

          <p className={s.topParagraph}>
            Car breakdown no problem with iRESCUE app, you can now request
            towing services anywhere in Nigeria with just a touch of a button.
          </p>
        </Slide>

        <Fade cascade duration={1000}>
          <ol className={s.orderedList}>
            {contentList.map((content, index) => {
              return (
                <>
                  <li key={index}>
                    <div className="custom-numbering">{index + 1}</div>
                    {content.title}
                  </li>
                  <p>{content.info}</p>
                </>
              );
            })}
          </ol>
        </Fade>
        <Slide direction={"right"} delay={1500}>
          <div className="right">
            <button>Get the app</button>
          </div>
        </Slide>
      </div>
    </>
  );
}
