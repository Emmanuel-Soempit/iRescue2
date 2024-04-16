import googlePlay from "../assets/images/playStore2.svg";
import appStore from "../assets/images/appStore2.svg";
import appGalley from "../assets/images/appGalley.svg";
import facebook from "../assets/images/facebook.png";
import X from "../assets/images/X.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import youtube from "../assets/images/youtube.png";
import LottieAnimation from "../components/lottieAnimation";
import phoneTrigger from "../phoneTrigger.json";
import appgallerySmall from "../assets/images/appgallerySmall.svg";
import appstoreSmall from "../assets/images/appstoreSmall.svg";
import playstoreSmall from "../assets/images/playstoreSmall.svg";
import {useNavigate} from 'react-router-dom'

export default function Footer() {
  const phoneNumber = "+2342013306046";

  const handlePhoneClick = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  const navigate = useNavigate()

  const handleEmailClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      window.location.href =
        "intent://compose?to=hello@irescue.ng#Intent;scheme=mailto;end";
    } else {
      window.location.href = "mailto:hello@irescue.ng";
    }
  };

  return (
    <>
      <div className="footWrapper ">
        <div className="footerLeft">
          <div
            className="footerPhone"
            onClick={handlePhoneClick}
            style={{ cursor: "pointer" }}
          >
            <LottieAnimation
              id="footerLottie"
              animationData={phoneTrigger}
              loop
              autoplay
              width="80px"
              height="80px"
            />
            <h3>01-3306046</h3>
          </div>

          <div
            className="largeScreen"
            onClick={handlePhoneClick}
            style={{ cursor: "pointer" }}
          >
            <LottieAnimation
              id="footerLottieLarge"
              animationData={phoneTrigger}
              loop
              autoplay
              width="130px"
              height="130px"
            />
            <h3>01-3306046</h3>
          </div>

          <div className="floatRight">
            <a href="mailto:hello@irescue.ng" onClick={handleEmailClick}>
              hello@irescue.ng
            </a>
          </div>

          <div className="footsocialLarge">
            <div className="footSocials">
              <div>
                <a href="facebook.com">
                  <img src={facebook} />
                </a>
              </div>
              <div>
                <a href="X.com">
                  <img src={X} />
                </a>
              </div>
              <div>
                <a href="instagram.com">
                  <img src={instagram} />
                </a>
              </div>
              <div>
                <a href="linkedin.com">
                  <img src={linkedin} />
                </a>
              </div>
              <div>
                <a href="youtube.com">
                  <img src={youtube} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footerRight">
          <div className="footerRighWrapper">
            <div className="coverage">
              <h3>Coverage</h3>
              <ul>
                <li>
                  <a href="#">Airport Towing</a>
                </li>
                <li>
                  <a href="#">Cities</a>
                </li>
                <li>
                  <a href="#">Highways</a>
                </li>
                <li>
                  <a href="#">VIP Exclusive</a>
                </li>
                <li>
                  <a href="#">Premium Tow</a>
                </li>
              </ul>
            </div>

            <div className="partner">
              <h3>Partner with iRescue</h3>
              <ul>
                <li>
                  <a href="#">Become a mechanic</a>
                </li>
                <li>
                  <a href="#">Become a towing van</a>
                </li>
                <li>
                  <a href="#">Sign up as a iRezone</a>
                </li>
                <li>
                  <a href="#">Sign up as an Ambulance</a>
                </li>
                <li>
                  <a href="#">Franchise</a>
                </li>
              </ul>
            </div>

            <div className="company">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footSocialsSmall">
              <div className="footSocials">
                <div>
                  <a href="facebook.com">
                    <img src={facebook} />
                  </a>
                </div>
                <div>
                  <a href="X.com">
                    <img src={X} />
                  </a>
                </div>
                <div>
                  <a href="instagram.com">
                    <img src={instagram} />
                  </a>
                </div>
                <div>
                  <a href="linkedin.com">
                    <img src={linkedin} />
                  </a>
                </div>
                <div>
                  <a href="youtube.com">
                    <img src={youtube} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="appDownloadLarge">
            <div className="footAppDownload">
              <div>
                <a href="#">
                  <img src={appStore} />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={googlePlay} />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={appGalley} />
                </a>
              </div>
            </div>
          </div>

          <div className="appDownloadSmall">
            <div className="footAppDownload">
              <div>
                <a href="#">
                  <img src={appstoreSmall} />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={playstoreSmall} />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={appgallerySmall} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="copyRight">
          <p>© 2024 iRescue Emergency® Solutions.</p>
        </div>
        <div className="privacyPolicy">
          <div>
            <a href="/privacy_policy" className="priBtn" >Privacy Policy</a>
          </div>
          <div>
            <a href="/terms_and_conditions" className="priBtn"  >Terms and Conditions</a >
          </div>
        </div>
      </div>
    </>
  );
}
