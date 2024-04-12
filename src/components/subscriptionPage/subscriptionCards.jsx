import Vector from "../../assets/images/Vector.png";
import naira from "../../assets/images/naira.png";
import s from "../../stylings/subscription.module.css";
import { Slide, Flip, Fade } from "react-awesome-reveal";

export default function Subscriptionards() {
  const subCards = [
    {
      title: "PREMIUM PLAN",
      naira: naira,
      price: "64,000.00",
      days: "365 days",
      Vector: Vector,
      benefits: ["Accidental Towing"],
      popular: "",
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
    },
  ];

  return (
    <>
      {subCards.map((subCard) => {
        return (
          <>
            <div className={s.subcard}>
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
          </>
        );
      })}
    </>
  );
}
