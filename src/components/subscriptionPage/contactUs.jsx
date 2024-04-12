import arrowRight from "../../assets/images/arrowRight.png";
import s from "../../stylings/subscription.module.css";
import { Slide, Flip, Fade } from "react-awesome-reveal";

export default function ContactUs() {
  return (
    <>
      <Slide direction={"left"} duration={1500}>
        <div className={`${s.contact} container`}>
          <div>
            <h3>Connect with our sales support team</h3>
            <p>
              Please share your mobile number, and we'll contact you to help you
              choose the ideal RSA plan that suits your requirements.
            </p>
            <p>
              <span>For any queries please give a missed call to </span>
              <span>01 -3306046</span>
            </p>
          </div>

          <div>
            <input type="text" />
            <span>
              <a href="#">
                <img src={arrowRight} />
              </a>
            </span>
          </div>
        </div>
      </Slide>
    </>
  );
}
