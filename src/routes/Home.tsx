import React from "react";
import AllAlbaCard from "../pages/AllAlbaCard";
import HomeText from "../components/HomeText";
import RouteEditor from "../components/RouteEditor";

const Home = () => {
  return (
    <div className="h-screen my-8 mt-14">
      <HomeText />
      <AllAlbaCard />
      <RouteEditor />
    </div>
  );
};

export default Home;
