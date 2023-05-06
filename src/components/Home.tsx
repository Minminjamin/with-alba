import React from "react";
import AllAlbaCard from "../pages/AlbaCard/AllAlbaCard";
import HomeText from "../pages/HomeText";
import RouteEditor from "../pages/RouteEditor";

const Home = () => {
  return (
    <div className="text-center h-screen">
      <HomeText />
      <AllAlbaCard />
      <RouteEditor />
    </div>
  );
};

export default Home;
