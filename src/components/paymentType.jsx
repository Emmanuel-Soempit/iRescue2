import React, { useState } from "react";
import cash from "../assets/images/cash.png";
import creditCard from "../assets/images/creditCard.svg";
import insurance from "../assets/images/insurance.svg";

const PaymentType = ({ setSelectedPayment, selectedPayment }) => {
  const paymentOptions = [
    { title: "Pay Cash", image: cash },
    { title: "Card Payment", image: creditCard },
    { title: "Insurance", image: insurance },
  ];

  const handleSelectedPayment = (paymentOption) => {
    setSelectedPayment(paymentOption.title);
  };

  return (
    <>
      <h3>Payment Options</h3>
      <div className="paymentType">
        {paymentOptions.map((paymentOption, index) => {
          const isDisabled = paymentOption.title === "Insurance";
          return (
            <div
              className={`payWith ${
                selectedPayment === paymentOption.title ? "selected" : ""
              } ${isDisabled ? "disabled" : ""}`}
              key={index}
              onClick={() => {
                if (!isDisabled) {
                  handleSelectedPayment(paymentOption);
                }
              }}
            >
              <img src={paymentOption.image} alt="" />
              <p>{paymentOption.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PaymentType;
