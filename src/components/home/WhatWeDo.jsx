import Image from "next/image";
import React from "react";
import Guitar from "@/assets/guitar.png";
import Piano from "@/assets/piano.png";
import Theory from "@/assets/theory.png";
import ButtonTemp from "../Button";
import Electric from "@/assets/Rectangle 49.png";
import Piano2 from "@/assets/Rectangle 50.png";
import Guitar2 from "@/assets/Rectangle 51.png";

const WhatWeDo = () => {
  return (
    <div className="bg-gray-950 min-h-screen bg-cover bg-center">
      <div className=" flex justify-center items-center pt-10">
        <div className="">
          <p className=" flex justify-center text-6xl text-yellow-500 font-bold">
            What We Do?
          </p>
          <p className=" flex justify-center text-center pt-3 text-xl">
            We passionately share the joy of music through personalized lessons,
            guiding beginners <br /> and skilled musicians alike on their unique
            musical journeys.
          </p>
          <div className=" flex justify-center">
            <div className=" pt-10 space-y-10 ">
              <div className="card w-[850px] h-[350px] flex justify-center items-center relative">
                <div className="bg w-[840px] h-[340px] flex justify-center items-center relative">
                  <div className="md:grid md:grid-cols-2 gap-6 items-center p-4">
                    <Image
                      className="w-96 h-auto flex justify-center rounded"
                      src={Guitar}
                      alt="home"
                    />
                    <div>
                      <p className="text-3xl flex justify-center text-yellow-500 font-semibold">
                        Guitar Classes
                      </p>
                      <p>
                        Master the guitar with our expert-led classes, perfect
                        for all skill levels. Learn techniques, chords, and
                        songs to play with confidence and creativity.
                      </p>
                      <ButtonTemp title="Join Now" />
                    </div>
                  </div>
                </div>
                <div className="blob w-[850px] h-[350px] absolute top-0 left-0"></div>
              </div>
              <div className="card w-[850px] h-[350px] flex justify-center items-center relative">
                <div className="bg w-[840px] h-[340px] flex justify-center items-center relative">
                  <div className="md:grid md:grid-cols-2 gap-6 items-center p-4">
                    <div>
                      <p className="text-3xl flex justify-center text-yellow-500 font-semibold">
                        Piano Classes
                      </p>
                      <p>
                        Master the Piano with our expert-led classes, perfect
                        for all skill levels. Learn techniques, chords, and
                        songs to play with confidence and creativity.
                      </p>
                      <ButtonTemp title="Join Now" />
                    </div>
                    <Image
                      className="w-96 h-auto flex justify-center rounded"
                      src={Piano}
                      alt="home"
                    />
                  </div>
                </div>
                <div className="blob w-[850px] h-[350px] absolute top-0 left-0"></div>
              </div>
              <div className="card w-[850px] h-[350px] flex justify-center items-center relative">
                <div className="bg w-[840px] h-[340px] flex justify-center items-center relative">
                  <div className="md:grid md:grid-cols-2 gap-6 items-center p-4">
                    <Image
                      className="w-96 h-auto flex justify-center rounded"
                      src={Theory}
                      alt="home"
                    />
                    <div>
                      <p className="text-3xl flex justify-center text-yellow-500 font-semibold">
                        Theory Classes
                      </p>
                      <p>
                        Master the guitar with our expert-led classes, perfect
                        for all skill levels. Learn techniques, chords, and
                        songs to play with confidence and creativity.
                      </p>
                      <ButtonTemp title="Join Now" />
                    </div>
                  </div>
                </div>
                <div className="blob w-[850px] h-[350px] absolute top-0 left-0"></div>
              </div>
            </div>
          </div>
          <div className=" pt-16">
            <p className=" flex justify-center text-6xl text-yellow-500 font-bold ">
              Immerse in the world of Music
            </p>
            <p className="flex justify-center text-center pt-3 text-xl">
              Prepare to be transported by the emotive performances of our
              musician.
            </p>
            <div className=" flex justify-center items-center space-x-10 pt-10">
              <Image className=" h-[381px] w-[418px]" src={Electric}></Image>
              <Image className=" h-[314px] w-[352px]" src={Piano2}></Image>
              <Image className=" h-[381px] w-[418px]" src={Guitar2}></Image>
            </div>
          </div>
          
          <div className=" pt-16">
            <p className=" flex justify-center text-6xl text-yellow-500 font-bold ">
              Why Choose Us
            </p>
            <div className=" grid grid-cols-2 pt-10">
              <div className=" bg-white w-[558px] mt-10 h-[266px] p-5 shadow-white shadow-2xl rounded-xl">
                <div className=" flex justify-center items-center gap-6">
                <Image className=" w-[100px] h-[100px] rounded-full" src={Guitar}></Image>
                <p className=" text-black text-3xl font-semibold">Experienced Instructors</p>
                </div>
                <p className=" text-yellow-500 text-2xl pl-20 font-medium text-center"> Our teachers are accomplished musicians with years of experience in both performing and teaching.</p>
              </div>
              <div className=" bg-white w-[558px] mt-10 h-[266px] p-5 shadow-white shadow-2xl rounded-xl">
                <div className=" flex justify-center items-center gap-6">
                <Image className=" w-[100px] h-[100px] rounded-full" src={Guitar}></Image>
                <p className=" text-black text-3xl font-semibold">Experienced Instructors</p>
                </div>
                <p className=" text-yellow-500 text-2xl pl-20 font-medium text-center"> Our teachers are accomplished musicians with years of experience in both performing and teaching.</p>
              </div>
              <div className=" bg-white w-[558px] mt-10 h-[266px] p-5 shadow-white shadow-2xl rounded-xl">
                <div className=" flex justify-center items-center gap-6">
                <Image className=" w-[100px] h-[100px] rounded-full" src={Guitar}></Image>
                <p className=" text-black text-3xl font-semibold">Experienced Instructors</p>
                </div>
                <p className=" text-yellow-500 text-2xl pl-20 font-medium text-center"> Our teachers are accomplished musicians with years of experience in both performing and teaching.</p>
              </div>
              <div className=" bg-white w-[558px] mt-10 h-[266px] p-5 shadow-white shadow-2xl rounded-xl">
                <div className=" flex justify-center items-center gap-6">
                <Image className=" w-[100px] h-[100px] rounded-full" src={Guitar}></Image>
                <p className=" text-black text-3xl font-semibold">Experienced Instructors</p>
                </div>
                <p className=" text-yellow-500 text-2xl pl-20 font-medium text-center"> Our teachers are accomplished musicians with years of experience in both performing and teaching.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
