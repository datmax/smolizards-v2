import type { NextPage } from "next";

import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

import Head from "next/head";
import Image from "next/image";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <div className="px-4 sm:px-20">
      <div className="md:text-9xl text-6xl text-center pt-20" id="home">
        {" "}
        SMOLIZARDS
      </div>
      <div className="text-6xl text-center text-white py-10">
        6969 unique lizard juices coming to Arbitrum.
      </div>
      <div className="text-6xl text-center text-white py-10">
        Free mint. Mint date:
      </div>{" "}
      <div className="text-6xl text-center text-white py-10">15/06/2022</div>
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        className=" rounded-lg"></video>
      <div className="w-full grid grid-cols-5 justify-center py-10 gap-12">
        <div className=" flex justify-center">
          <motion.img
            whileHover={{ scale: 1.5 }}
            src="/_#1.png"
            alt=""
            className=" rounded-lg"
          />
        </div>
        <div className=" flex justify-center rounded-lg">
          <motion.img
            whileHover={{ scale: 1.5 }}
            src="/AIZARD#1.png"
            alt=""
            className=" rounded-lg"
          />
        </div>{" "}
        <div className=" flex justify-center rounded-lg">
          <motion.img
            whileHover={{ scale: 1.5 }}
            src="/BEELZIZBUB#1.png"
            alt=""
            className=" rounded-lg"
          />
        </div>
        <div className=" flex justify-center rounded-lg">
          <motion.img
            whileHover={{ scale: 1.5 }}
            src="/big_black#1.png"
            alt=""
            className=" rounded-lg"
          />
        </div>
      </div>
      <div
        className="w-full text-7xl text-center text-white py-10 md:py-20"
        id="roadmap">
        Roadmap
      </div>
      <img src="/sito.webp" alt="" />
      <div className=" text-center text-white  py-10 md:pt-40 text-5xl">
        Whitepaper
      </div>
      <div className=" text-center text-gray-200 py:5 text-3xl">
        Download our whitepaper to know everything about the Smolizards world.
      </div>
      <div className="flex justify-center text-3xl">
        <button className=" my-10 border-white bg-white rounded-lg border-2 px-10 py-2 hover:bg-white hover:text-purple-800">
          <a href="https://drive.google.com/file/d/12BaadFsJ0dAZyuDgS_Y6S6HUpwZUn60y/view">
            Whitepaper
          </a>
        </button>
      </div>
      <div className=" text-center text-white  mt-20 text-7xl" id="team">
        Team
      </div>
      <Team></Team>
      <div className=" text-center text-white md:mt-40 mt-20 text-5xl mb-10">
        Powered by
      </div>
      <div className="grid grid-cols-3 pt-10 pb-10 gap-4">
        <div className="flex justify-center">
          <img
            src="https://markcubancompanies.com/wp-content/uploads/2021/05/Arbitrum_Vertical-Logo-Full-color-White-background.png"
            className="rounded-full"
            width="120"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/based_labs.jpg"
            className="rounded-full"
            width="120"
            alt=""
          />
        </div>{" "}
        <div className="flex justify-center">
          <img src="/trove.jpeg" className="rounded-full" width="120" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
