import { Slide, Bounce, Fade } from "react-awesome-reveal";

export default function IrezoneTab() {
  const contentList = [
    {
      title: "Parking Zone Opportunities ",
      info: "Offer car parking services, particularly for car owners experiencing breakdowns, in major cities throughout Nigeria.",
    },
    {
      title: "Wide Customer Base ",
      info: "Access a large pool of drivers who may require your garage services. ",
    },

    {
      title: "Review System",
      info: "Build a positive reputation through customer reviews and ratings, attracting more business.",
    },
  ];
  return (
    <>
      <Fade cascade duration={1000}>
        <ol className="ordered-list">
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
        <button>Learn More</button>
      </Slide>
    </>
  );
}
