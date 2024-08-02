import React from "react";
import Image from "next/image";
import Guitarist from '../../../public/guitarist.json'
import Lottie from "lottie-react";
import Navbar from "@/components/Navbar";
import ButtonTemp from "@/components/Button";
import WhatWeDo from "@/components/home/WhatWeDo";

const Home = () => {
  return (
    <div className="bg-gradient-to-tl from-gray-200 via-gray-500 to-gray-700 min-h-screen bg-cover bg-center text-white">
      <Navbar />
      <div className=" flex justify-center items-center min-h-screen mx-32">
        <div className=" lg:grid lg:grid-cols-2 items-center">
          <div className="">
            <div className=" text-6xl text-center flex justify-center font-bold">
              Unleash the Artistry of Our Musician
            </div>
            <div className=" pt-3 text-xl text-center">
              Dive into the enchanting world of melodies and harmonies created
              by our artist, and let their music take you on a journey of
              emotion and imagination.
            </div>
            <ButtonTemp
                title="Join Now"
                to="/"
              />
          </div>
          <div className="w-full max-w-[500px] h-auto mx-auto">
            <Lottie animationData={Guitarist} loop={true} />
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 h-4"></div>
      <WhatWeDo />
    </div>
  );
};

export default Home;
