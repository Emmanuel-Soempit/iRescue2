import axios from "axios";
import { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import Swal from "sweetalert2";
import NearbyDrivers from "./nearbyDrivers";
import naira from "../assets/images/naira.png";
import { useGlobalState } from "./myContext";

export default function Summary({
  selectedOptions,
  selectedPayment,
  setIsModalOpen,
  goBack,
}) {
  const [cashPayment, setCashPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState([]);
  const { email, fullname, phone, userId } = useGlobalState();

  useEffect(() => {
    if (selectedPayment === "Pay Cash") {
      setCashPayment(true);
    } else {
      setCashPayment(false);
    }
  }, [selectedPayment]);

  const amount = selectedOptions.totalPrice * 100;
  const publicKey = "pk_test_6838d19a72f437309fdc7d4886a61a85fbe14adc";

  const details = [
    { title: "Car Type", info: selectedOptions.selectedCar.name },
    { title: "Car Make", info: selectedOptions.selectedCarMake.name },
    { title: "Towing Vehicle", info: selectedOptions.selectedTowCar },
    {
      title: "Price per kilometer",
      info: (
        <span className="summarySpan">
          <img src={naira} alt="Naira" className="nairaImage" />
          {selectedOptions.selectedTowCarPrice}
        </span>
      ),
    },
    { title: "Payment Type", info: selectedOptions.selectedPayment },
    {
      title: "SubTotal",
      info: (
        <span className="summarySpan">
          <img src={naira} alt="Naira" className="nairaImage" />{" "}
          {selectedOptions.SubtotalPrice.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      ),
    },
    {
      title: "Total",
      info: (
        <span className="summarySpan">
          <img src={naira} alt="Naira" className="nairaImage" />{" "}
          {selectedOptions.totalPrice.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      )
    },
  ];

  const data = {
    pickupLatitude: selectedOptions.userCoordinates.locationCoordinates.lat,
    pickupLongitude: selectedOptions.userCoordinates.locationCoordinates.lng,
    destinationLatitude:
      selectedOptions.userCoordinates.destinationCoordinates.lat,
    destinationLongitude:
      selectedOptions.userCoordinates.destinationCoordinates.lng,
    carType: selectedOptions.selectedCar.name,
    carMake: selectedOptions.selectedCarMake.name,
    userId: userId,
    amount: selectedOptions.totalPrice,
    pickupAddress: selectedOptions.userAddress.locationAddress,
    destinationAddress: selectedOptions.userAddress.destinationAddress,
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      fullname,
      phone,
    },
    publicKey,
    className: "searchRoute",
    text: "Pay Now",
    onSuccess: (response) => {
      /* alert("Thanks for doing business with us! Come back soon!!"); */

      const data = {
        txnId: response.trxref,
        userId: userId,
        amount: selectedOptions.totalPrice,
        status: "Successful",
        type: "Car Towing",
        usertype: "User",
        paymentMethod: "Card",
      };

      successfulPayment(data);
      submitRequest();
    },

    onClose: () => alert("Wait! Don't leave :("),
  };

  //paystack sucessful payment
  const successfulPayment = async (data) => {
    try {
      const response = await axios.post(
        "https://trys.irescue.ng/api/sendPaymentDetails",
        data
      );
      console.log("Request submitted successfully:", response.data);
      Swal.fire({
        title: "Success!",
        text: "Request submitted successfully, we are on our way",
        icon: "success",
      });
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  //submit towing request

  const submitRequest = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://trys.irescue.ng/api/submitRequest",
        data
      );
      console.log("Request submitted successfully:", response.data);
      Swal.fire({
        title: "Success!",
        text: "Request submitted successfully, we are on our way",
        icon: "success",
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="orderSummary">
        <h3>Trip Summary </h3>
        <p>{selectedDriver.fullname}</p>
        <div className="summary">
          <ul>
            {details.map((detail, index) => {
              return (
                <li key={index}>
                  <p>{detail.title}</p>
                  <p>{detail.info}</p>
                </li>
              );
            })}
          </ul>
          <NearbyDrivers
            setSelectedDrive={setSelectedDriver}
            selectedDriver={selectedDriver}
          />
        </div>
        {/*  <button
          className="searchRoute"
          style={{ marginRight: "2rem" }}
          onClick={goBack}
        >
          Back
        </button>
        <button className="searchRoute" style={{ marginRight: "2rem" }}>
          Make an Offer
        </button> */}
        {/*  <button
          className="searchRoute"
          style={{ marginRight: "2rem" }}
          onClick={goBack}
        >
          Back
        </button>
        <button className="searchRoute" style={{ marginRight: "2rem" }}>
          Make an Offer
        </button> */}

        {cashPayment && (
          <button className="searchRoute" onClick={submitRequest}>
            {isLoading ? <div className="loader"></div> : "Send Request"}
          </button>
        )}
        {!cashPayment && <PaystackButton {...componentProps} />}
      </div>
    </>
  );
}
