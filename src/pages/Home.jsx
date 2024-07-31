import React from "react";
import { Layout } from "../layout/Layout";
import vector from "../assets/vector-4k.png";
import Typewriter from "typewriter-effect";
import "./home.css";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <Layout>
      <div id="home" className="home-box   flex ">
        <div className="text-side flex items-center text-center text-4xl p-5 gap-4 w-[55%]">
          <div className="text -mt-[11rem] w-full gap-3 ">
            <h1>
              Adnan Ashraf, <br />{" "}
            </h1>
            <div className="typewriter text-cyan-300">
              <Typewriter
                className="ml-5"
                options={{
                  strings: [" Web Developer",  " AI/ML"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Quisquam, voluptas?
            </p>
          </div>
        </div>
        <div className="vector-side  relative -ml-[12rem] -z-10  flex justify-start  h-[80vh]">
          <img
            className="w-full h-full rounded-full object-cover"
            src={vector}
            alt="vector"
          ></img>
        </div>
      </div>
      <Skills/>
    </Layout>
  );
};
