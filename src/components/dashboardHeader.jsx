import brand from "../assets/images/brand.png";
import hamburger from "../assets/images/hamburger.png";
import invoice from "../assets/images/invoice.png";
import profileIcon from "../assets/images/profileIcon.png";
import getATow from "../assets/images/getATow.png";
import closeIcon from "../assets/images/closeIcon.png";

export default function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header">
        <div>
          <div className="logo_icon_side">
            <img src={brand} className="logo" />

            <div className="menuIcons">
              {!isOpen && (
                <div className="toggle-button" onClick={toggleSidebar}>
                  <img src={hamburger} className="hamburger_icon" />
                </div>
              )}
              {isOpen && (
                <div className="toggle-button" onClick={toggleSidebar}>
                  <img src={closeIcon} className="closeIcon" />
                </div>
              )}
            </div>

            <div className="getatow">
              <img src={getATow} className="take_tour_img" />
              <p>Get a Tow</p>
              <img src={downAngle} className="downAngle" />
            </div>
          </div>
        </div>
        <div>
          <div className="profile_img_side">
            <img src={invoice} className="my_trips_logo_img" />
            <p className="my_trips_text">My Trips</p>
            <img src={profileIcon} className="profile_logo_img" />
            <img src={downAngle} className="downAngle" />
          </div>
        </div>
      </div>
    </>
  );
}
