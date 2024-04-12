import Ellipse from "../assets/images/Ellipse 1.png";
import loginImg from "../assets/images/loginImg.png";
import Header from "../components/Header";
import Logo from "../assets/images/brand.png";
import WindowScroll from "../components/windowScroll";
import ParticlesBg from "../components/particlesBg";
import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalState } from "../components/myContext";
import "../stylings/signin.css";

export default function OtpVerification() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });

  const [loading, setLoading] = useState(false);
  const { email } = useGlobalState();
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // Move to the next input
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus(); // Move to the previous input if value is cleared
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { otp1, otp2, otp3, otp4 } = formData;
    const otp = otp1 + otp2 + otp3 + otp4;

    if (otp.length !== 4) {
      Swal.fire({
        title: "Oops!",
        text: "Please enter a 4-digit OTP",
        icon: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://trys.irescue.ng/api/loginWithOtp",
        { otp, email }
      );

      if (response.data.message === "Verification Successful") {
        Swal.fire({
          title: "Success!",
          text: "OTP verification successful!",
          icon: "success",
        });
        navigate("/Login");
      } else {
        Swal.fire({
          title: "Error!",
          text:
            response.data.error ||
            response.data.message ||
            "Failed to verify OTP",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "An error occurred",
        icon: "error",
      });
      console.error("OTP verification error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ParticlesBg />
      <WindowScroll />

      <div className="loginWrapper registerWrapper">
        <Header logo={Logo} isFixed={true} linkColor="" />
        <div className="heroEllipse">
          <img src={Ellipse} />
        </div>
        <div className="loginImg">
          <img src={loginImg} alt="" />
        </div>

        <div className="input inputContainer otpContainer">
          <h3>Verify Otp to Continue </h3>
          <div className="inputBack otpBack">
            <div className="optVerification">
              <h4>Validate your OTP</h4>

              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="otp1"
                    maxLength="1"
                    value={formData.otp1}
                    onChange={(e) => handleChange(e, 0)}
                    ref={(ref) => (inputRefs.current[0] = ref)}
                  />

                  <input
                    type="text"
                    name="otp2"
                    maxLength="1"
                    value={formData.otp2}
                    onChange={(e) => handleChange(e, 1)}
                    ref={(ref) => (inputRefs.current[1] = ref)}
                  />
                  <input
                    type="text"
                    name="otp3"
                    maxLength="1"
                    value={formData.otp3}
                    onChange={(e) => handleChange(e, 2)}
                    ref={(ref) => (inputRefs.current[2] = ref)}
                  />
                  <input
                    type="text"
                    name="otp4"
                    maxLength="1"
                    value={formData.otp4}
                    onChange={(e) => handleChange(e, 3)}
                    ref={(ref) => (inputRefs.current[3] = ref)}
                  />
                </div>

                <div>
                  <button type="submit" disabled={loading}>
                    {loading ? <div className="loader"></div> : "Verify"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
