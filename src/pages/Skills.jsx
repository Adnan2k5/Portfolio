import React from "react";
import "./home.css";
import AppearOnScroll from "../components/AppearonScroll";

export const Skills = () => {
  return (
    <AppearOnScroll>
    <div id="skill" className="skill-box mt-12 w-full h-[80vh]">
      <div className="header flex items-center justify-center">
        <h1 className="text-4xl w-fit text-center border-b-2 border-gray-200">
          Skills
        </h1>
      </div>
      <div className="cards flex w-[100vw] justify-around mt-10">
        <div className="card-shine-effect  w-[40%]">
          <h3 className="title text-center text-3xl">FULL STACK WEB DEV</h3>
          <p className="description text-lg">
            React, JS, Express, <br/> Node, MongoDB.
          </p>
        </div>
        <div className="card-shine-effect w-[40%]">
          <h3 className="title text-center text-3xl">AI/ML</h3>
          <p className="description text-lg">
            TensorFlow, Keras, <br/> NumPy, Pandas.
          </p>
        </div>
      </div>
      <div className="cards  flex w-[100vw] justify-around mt-10">
        <div className="card-shine-effect w-[40%]">
          <h3 className="title text-center text-3xl">Cometitive Coder</h3>
          <p className="description text-lg">
            C/C++, Java, DSA <br/>
            4 * CodeChef & HackerRank 
          </p>
        </div>
      </div>
    </div>
    </AppearOnScroll>
  );
};
