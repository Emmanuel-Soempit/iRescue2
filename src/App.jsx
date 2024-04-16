import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import NoPage from "./pages/noPage";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Subscription from "./pages/subscription";
import Login from "./pages/login";
import Register from "./pages/Register";
import OtpVerification from "./pages/otpVerification";
import PageHelmet from "./Helmet";
import { HelmetProvider } from "react-helmet-async";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <>
      <HelmetProvider>
        <PageHelmet />
        <SmoothScroll />
        <Router>
          <Routes>
            <Route index exact element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/privacy_policy" element={<Privacy />} />
            <Route path="/terms_and_conditions" element={<Terms />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/otpVerification" element={<OtpVerification />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}
