import "./home.css";
import HEAD from "../img/header.png";
import React from "react";

const Home = () => {
  return <div className="home">
    <div className="logo">Garoa<sup>&#174;</sup></div>
    <div className="header">
        <div className="title">
            <span className="slant">Treat</span> your skin <br />
            in every  <span className="slant">season</span>
        </div>
        <a href="#" class="myButton">Shop now</a>
        <img src={HEAD} alt="" className="head" />
    </div>
  </div>;
};

export default Home;
