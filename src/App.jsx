import NavBar from "./component/Header/NavBar";
import React from "react";
import HeaderSlider from "./component/HeaderSlider/HeaderSlider";
import About from "./component/About/About"
export default function App() {
  console.log("test")
  return (
    <div>
      <NavBar />
      { <HeaderSlider/> }
      <About/>
    </div>
  );
}
