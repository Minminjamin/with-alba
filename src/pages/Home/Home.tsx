import React from "react";
import AlbaCard from "../AlbaCard/AlbaCard";
import HomeText from "../HomeText";
import RouteEditor from "../RouteEditor";

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
