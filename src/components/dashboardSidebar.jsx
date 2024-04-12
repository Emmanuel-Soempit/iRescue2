import locate from "../assets/images/locate.png";
import redDots from "../assets/images/redDots.png";
import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
import car3 from "../assets/images/car3.png";
import car4 from "../assets/images/car4.png";
import toyotaLogo from "../assets/images/toyotaLogo.png";
import shield from "../assets/images/shield.png";
import towTruck3 from "../assets/images/towTruck3.png";
import cashLogo from "../assets/images/cashLogo.png";
import downAngle from "../assets/images/downAngle.png";

export default function DashboardSidebar({ isOpen }) {
  return (
    <>
      <div className={`mainleft ${isOpen ? "open" : ""}`}>
        <h3>Towing Details</h3>
        <div className="redDots">
          <img src={redDots} />
        </div>
        <div className="dashInputs">
          <input type="text" placeholder="Gwarimpa 1, Abuja" />
          <img src={locate} className="inputImg2" />
        </div>
        <div className="dashInputs">
          <input type="text" placeholder="2 ango Abdullahi 1, Abuja" />
          <img src={locate} />
        </div>

        <div className="carType">
          <h3>Select car type</h3>
          <div className="cars">
            <div className="car1">
              <p>Suv</p>
              <img src={car1} />
            </div>
            <div className="car2">
              <p>HatchBack</p>
              <img src={car2} />
            </div>
            <div className="car3">
              <p>Sedon</p>
              <img src={car3} />
            </div>
            <div className="car4">
              <p>Jeep</p>
              <img src={car4} />
            </div>
          </div>
        </div>

        <div className="carMake">
          <h3>Select car make</h3>
          <div className="carSelect">
            <img src={toyotaLogo} />
            <p>Toyota Matrix 2014</p>
            <img src={shield} className="shield" />
          </div>
        </div>

        <div className="vehicleKind">
          <h4>What vehicle do you wish to tow?</h4>
          <div className="micro">
            <img src={towTruck3} />
            <div className="arrival">
              <h4>Micro</h4>
              <p>Arrival 7mins</p>
            </div>

            <div className="price">
              <p>Estimate Price</p>
              <p>3000 - 8000</p>
            </div>
          </div>

          <div className="micro">
            <img src={towTruck3} />
            <div className="arrival">
              <h4>Micro</h4>
              <p>Arrival 7mins</p>
            </div>

            <div className="price">
              <p>Estimate Price</p>
              <p>3000 - 8000</p>
            </div>
          </div>
        </div>

        <div className="paymentTop"></div>
        <div className="payment">
          <div className="cash">
            <div className="cashTop">
              <p>Cash</p>
              <img src={downAngle} className="downAngle" />
            </div>

            <div className="cashBottom">
              <img src={cashLogo} className="cashLogo" />
              <p>Switch payment</p>
            </div>
          </div>
          <button>Select iRescue</button>
        </div>
      </div>
    </>
  );
}
