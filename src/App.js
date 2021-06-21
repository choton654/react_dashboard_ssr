import React from "react";
import SideNavbar from "./components/SideNavbar";
import Body from "./components/Body";
import './index.css';

const App = () => {
  return (
    <div className="h-screen flex justify-center" style={{
      backgroundColor: "#424242"
    }}>
      <section className="w-4/5 h-4/5 my-auto flex 
      flex-row text-gray-600
        bg-gray-900 body-font
        rounded-xl shadow-2xl"
      >
        <SideNavbar />
        <Body />
      </section>
    </div>
  );
}

export default App;
