import { Slide, Bounce, Fade } from "react-awesome-reveal";

export default function AmbulanceTab() {
  const contentList = [
    {
      title: "User-Friendly Safety First App",
      info: "The iRescue app provides instructions and tools to keep ambulances and users safe. Drive smoothly with the iRescue Ambulance app.",
    },
    {
      title: "Transparent Earnings",
      info: "Track your earnings and know exactly how much you've earned after each trip.",
    },

    {
      title: "Customer and Community Support  ",
      info: "Access Irescue's specialised support line for any help or enquiries.Join a community of iRescue Ambulance drivers, exchanging experiences and advice for success.",
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
