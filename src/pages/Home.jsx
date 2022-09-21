import React, { useState } from "react";
import HomeMain from "../components/Home/HomeMain/HomeMain";
import SecondHeader from "../components/Home/SecondHeader/SecondHeader";
import { Load } from "../components/Load/Load";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(()=> {
    setLoading(false)
  },2500)

  if (loading) {
    return <Load/>
  }

  return (
    <div>
      <SecondHeader />
      <HomeMain />
    </div>
  );
};

export default Home;
