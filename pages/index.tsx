import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="px-4 sm:px-20">
      <div className="md:text-9xl text-5xl text-center pt-20"> SMOLIZARDS</div>
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
      <div className="w-full grid grid-cols-3 justify-center py-10">
        <div className=" flex justify-center">
          <img src="/gatto.png" alt="" />
        </div>
        <div className=" flex justify-center">
          <img src="/gatto.png" alt="" />
        </div>{" "}
        <div className=" flex justify-center">
          <img src="/gatto.png" alt="" />
        </div>
      </div>
      <div className="w-full text-7xl text-center text-white py-10 md:py-40">
        Roadmap
      </div>
      <img src="/sito.webp" alt="" />
      <div className=" text-center text-white  py-10 md:pt-40 text-5xl">
        Whitepaper
      </div>
      <div className=" text-center text-gray-400 py:5 text-3xl">
        Download our whitepaper to know everything about the Smolizards world.
      </div>
      <div className="flex justify-center text-3xl">
        <button className=" my-10 border-white rounded-lg border-2 px-10 py-2 hover:bg-white hover:text-purple-800">Whitepaper</button>
      </div>
    </div>
  );
};

export default Home;
