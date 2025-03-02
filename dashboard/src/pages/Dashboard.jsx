import React, { useEffect } from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";
import { useNavigate } from "react-router-dom";

const carObj = {
  title: "Total",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userid = localStorage.getItem("userId");
    if (!token && !userid) {
      nav("/");
    }
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Clients Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        {/* <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
