import loginImg from "../assets/images/loginImg.png";
import loginImgSmall from "../assets/images/loginImgSmall.png";
import Header from "../components/Header";
import Logo from "../assets/images/brand.png";
import phoneNumber from "../assets/images/phoneNumber.png";
import password from "../assets/images/password.png";
import WindowScroll from "../components/windowScroll";
import ParticlesBg from "../components/particlesBg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useGlobalState } from "../components/myContext";
import "../stylings/signin.css";

export default function Login() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const { setUserId } = useGlobalState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { phone, password } = formData;
    if (phone.trim() === "" || password.trim() === "") {
      Swal.fire({
        title: "Oops!",
        text: "Please fill in all fields",
        icon: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://trys.irescue.ng/api/login", {
        phone,
        password,
      });

      if (response.data.message === "Login Successful") {
        Swal.fire({
          title: "Success!",
          text: "Welcome back to Irescue",
          icon: "success",
        });

        sessionStorage.setItem("token", response.data.token);
        setUserId(response.data.user.id);

        navigate("/dashboard");
      } else {
        Swal.fire({
          title: "Error!",
          text:
            response.data.message || response.data.error || "Failed to login",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.error || "An error occurred",
        icon: "error",
      });
      console.error("Login error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ParticlesBg />
      <WindowScroll />

      <div className="loginWrapper">
        <div className="heroEllipse"></div>

        <Header logo={Logo} isFixed={true} linkColor="" />
        <div className="loginImgLarge">
          <div className="loginImg">
            <img src={loginImg} alt="" />
          </div>
        </div>

        <div className="loginImgSmall">
          <div className="loginImg">
            <img src={loginImgSmall} alt="" />
          </div>
        </div>

        <div className="input">
          <div className="inputContainer">
            <h3>Welcome to IRescue</h3>
            <h4>User Login</h4>

            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No"
                />
                <img src={phoneNumber} />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <img src={password} />
              </div>

              <div>
                <button type="submit" disabled={loading}>
                  {loading ? <div className="loader"></div> : "Login Now"}
                </button>
                <a href="#">Reset Password</a>
                <div className="dnthvAcct">
                  Don't have an Account ??
                  <span>
                    <Link to="/Register">Signup</Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
