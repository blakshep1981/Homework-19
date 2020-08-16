import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
        <Wrapper>
        <Home />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
