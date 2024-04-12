import React, { useState, useEffect } from "react";
import brand from "../assets/images/brand.png";
import invoice from "../assets/images/invoice.png";
import profileIcon from "../assets/images/profileIcon.png";
import redDots from "../assets/images/redDots.png";
import getATow from "../assets/images/getATow.png";
import downAngle from "../assets/images/downAngle.svg";
import MapWithDistance from "../components/GoogleMap";
import "../stylings/dashboard.css";
import AddressAutoComplete from "../components/addressAutoComplete";

export default function Dashboard() {
  return (
    <>
      <div className="headerBack">
        <div className="header">
          <div className="logo_icon_side">
            <img src={brand} className="logo" />

            <div className="getatow">
              <img src={getATow} className="take_tour_img" />
              <p>Get a Tow</p>
              <img src={downAngle} className="downAngle" />
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
      </div>

      <div className="dashBackground">
        <div className="mainleft">
          <h3>Towing Details</h3>
          <div className="redDots">
            <img src={redDots} />
          </div>

          <AddressAutoComplete isDashboard={true} />
        </div>

        <div className="map">
          <MapWithDistance />
        </div>
      </div>
    </>
  );
}
