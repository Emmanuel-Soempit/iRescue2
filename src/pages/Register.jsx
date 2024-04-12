import loginImg from "../assets/images/loginImg.png";
import Header from "../components/Header";
import Logo from "../assets/images/brand.png";
import viewPassword from "../assets/images/viewPassword.png";
import hidePassword from "../assets/images/hidePassword.png";
import WindowScroll from "../components/windowScroll";
import ParticlesBg from "../components/particlesBg";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../components/myContext";
import "../stylings/signin.css";

export default function Register() {
  const navigate = useNavigate(); // Initialize useNavigate
  const { setEmail, setPhone, setFullname } = useGlobalState();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });

  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    //logic for password and conirm password fields
    if (name === "password") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  //toggle passwords
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validate user input
    if (
      formData.firstname.trim() === "" ||
      formData.lastname.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === ""
    ) {
      Swal.fire({
        title: "Oops!",
        text: "Please Fill all fields",
        icon: "error",
      });
      return;
    }

    //check if passwords match
    if (formData.password !== ConfirmPassword) {
      Swal.fire({
        title: "Oops!",
        text: "Passwords do not match",
        icon: "error",
      });
      return;
    }

    if (formData.password.length < 6) {
      Swal.fire({
        title: "Oops!",
        text: "Passwords Must be at Least 6 Characters",
        icon: "error",
      });
      return;
    }

    //continnue with the submission if validation passes
    setLoading(true); //show the loading state

    try {
      const response = await axios.post(
        "https://trys.irescue.ng/api/register",
        formData
      );

      console.log("Registration successful", response.data);

      if (response.data.message === "Registration Successful") {
        Swal.fire({
          title: "Good job!",
          text: response.data.message,
          icon: "success",
        });

        setEmail(formData.email);
        setPhone(formData.phone);
        setFullname(formData.firstname + formData.lastname);
        navigate("/otpVerification");
      } else {
        Swal.fire({
          title: "Oops!",
          text: response.data.message,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Registration failed", error.response || error.message);

      if (error.message) {
        // If there's a response from the server, log the error data
        Swal.fire({
          title: "Oops!",
          text: error.response.data.error || "An error occurred",
          icon: "error",
        });
        console.log("Server error data:", error.response.data);
      }
    } finally {
      //set loading back to false regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <>
      <ParticlesBg />
      <WindowScroll />

      <div className="loginWrapper registerWrapper">
        <Header logo={Logo} isFixed={true} linkColor="" />
        <div className="heroEllipse"></div>
        <div className="loginImg">
          <img src={loginImg} alt="" />
        </div>
        <div className="input inputRegister inputContainer">
          <h3>Register Now on IRescue</h3>
          <div className="inputBack">
            <form onSubmit={handleSubmit}>
              <div className="inputCols">
                <div className="firstCol">
                  <div>
                    <label>First Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                  </div>

                  <div>
                    <label>Email Address</label>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label>Password</label>
                  </div>
                  <div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />

                    {showPassword ? (
                      <img
                        style={{ cursor: "pointer" }}
                        src={hidePassword}
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <img
                        style={{ cursor: "pointer" }}
                        src={viewPassword}
                        onClick={togglePasswordVisibility}
                      />
                    )}
                  </div>
                </div>
                <div className="secondCol">
                  <div>
                    <label>Last Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                  </div>

                  <div>
                    <label>Phone Number</label>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone No"
                    />
                  </div>

                  <div>
                    <label>Confirm Password</label>
                  </div>
                  <div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      onChange={handleChange}
                      placeholder="Confirm Password"
                    />
                    {showPassword ? (
                      <img
                        style={{ cursor: "pointer" }}
                        src={hidePassword}
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <img
                        style={{ cursor: "pointer" }}
                        src={viewPassword}
                        onClick={togglePasswordVisibility}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <button type="submit" disabled={loading}>
                  {loading ? <div className="loader"></div> : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
