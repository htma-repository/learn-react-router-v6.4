import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("about");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-y-4">
      <h1>Home Page</h1>
      <button onClick={navigateHandler}>Go to About</button>
    </section>
  );
};

export default Home;
