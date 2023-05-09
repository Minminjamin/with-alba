import React from "react";
import AllAlbaCard from "../pages/AllAlbaCard";
import HomeText from "../pages/HomeText";
import RouteEditor from "../pages/RouteEditor";

const Home = () => {
  return (
    <div className="h-screen">
      <HomeText />
      <AllAlbaCard />
      <RouteEditor />
    </div>
  );
};

export default Home;
