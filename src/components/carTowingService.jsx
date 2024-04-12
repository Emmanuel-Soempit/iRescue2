import React, { useState, useEffect } from "react";
import axios from "axios";
import TowingType from "../components/TowingType";
import PaymentType from "./paymentType";
import Summary from "./TowingServiceSummary";
import CarMake from "./carMake";
import { useGlobalState } from "./myContext";

export default function CarTowingService({ setIsModalOpen }) {
  const [carTypes, setCarTypes] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCarMake, setSelectedCarMake] = useState(null);
  const [carMakes, setCarMakes] = useState([]);
  const [selectedTowCarPrice, setSelectedTowCarPrice] = useState(null);
  const [selectedTowCar, setSelectedTowCar] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMake, setIsLoadingMake] = useState(false);
  const {
    distance,
    locationAddress,
    destinationAddress,
    locationCoordinates,
    destinationCoordinates,
  } = useGlobalState();
  const userAddress = { locationAddress, destinationAddress };
  const userCoordinates = { locationCoordinates, destinationCoordinates };

  const handleGoBack = () => {
    setShowSummary(false);
  };
  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://trys.irescue.ng/api/car_type"
        );
        setCarTypes(response.data.type);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCarTypeClick = async (carType) => {
    setIsLoadingMake(true);
    setCarMakes([]);
    setSelectedCarMake(null);

    try {
      setSelectedCar(carType);

      const response = await axios.post(
        `https://trys.irescue.ng/api/car_make?type_id=${carType.id}`
      );

      setCarMakes(response.data.make);
    } catch (error) {
      console.error("Error fetching car makes:", error);
    } finally {
      setIsLoadingMake(false);
    }
  };

  const handleCarMakeClick = (carMake) => {
    setSelectedCarMake(carMake);
  };

  const handleGotoSummary = () => {
    setShowSummary(true);
  };

  const updateSelectedTowCar = (towingType) => {
    setSelectedTowCar(towingType.name);
    setSelectedTowCarPrice(towingType.fixed_price);
  };

  const SubtotalPrice = parseFloat((selectedTowCarPrice * distance).toFixed(2));
  const totalPrice = 2000 + SubtotalPrice;
  const selectedOptions = {
    selectedCar,
    selectedCarMake,
    selectedTowCarPrice,
    selectedTowCar,
    selectedPayment,
    userAddress,
    userCoordinates,
    SubtotalPrice,
    totalPrice,
  };

  return (
    <>
      {showSummary ? (
        <Summary
          selectedOptions={selectedOptions}
          selectedPayment={selectedPayment}
          setIsModalOpen={setIsModalOpen}
          goBack={handleGoBack}
        />
      ) : (
        <div className="carType">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <>
              <h3>SELECT CAR TYPE</h3>
              <div className="carTypeContainer">
                {carTypes.map((carType) => {
                  return (
                    <div
                      className={`carBox ${
                        selectedCar && selectedCar.id === carType.id
                          ? "selected"
                          : ""
                      }`}
                      key={carType.id}
                      onClick={() => handleCarTypeClick(carType)}
                    >
                      <img src={`https://trys.irescue.ng${carType.image}`} />
                      <p>{carType.name}</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {selectedCar && (
            <>
              <div className="dColumn">
                <CarMake
                  carMakes={carMakes}
                  selectedCarMake={selectedCarMake}
                  setSelectedCarMake={setSelectedCarMake}
                  handleCarMakeClick={handleCarMakeClick}
                  isLoadingMake={isLoadingMake}
                />
                <TowingType
                  updateSelectedTowCar={updateSelectedTowCar}
                  selectedTowCar={selectedTowCar}
                />
              </div>
              {selectedTowCar !== null && (
                <>
                  <div className="paymentOptions">
                    <PaymentType
                      setSelectedPayment={setSelectedPayment}
                      selectedPayment={selectedPayment}
                    />
                    {selectedPayment && (
                      <>
                        <button
                          className="proceedBtn"
                          onClick={handleGotoSummary}
                        >
                          Proceed
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
