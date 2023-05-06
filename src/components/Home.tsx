import React from "react";
import AlbaCard from "../pages/AlbaCard/AlbaCard";
import HomeText from "../pages/HomeText";
import RouteEditor from "../pages/RouteEditor";

const Home = () => {
  return (
    <div className="text-center h-screen">
      <HomeText />
      <AlbaCard />
      <RouteEditor />
    </div>
  );
};

export default Home;
