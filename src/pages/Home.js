import React from "react";
import Hero from "../components/Hero";
import DataArea from "../components/DataArea";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://imgur.com/T74B34B.jpg">
        <h1>Employee Directory</h1>
      </Hero>
      <DataArea />
    </div>
  );
}

export default Home;
