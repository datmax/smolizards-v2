import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Web3Context } from "../context/web3Context";

export default function Mint() {
  const { provider, address, network, connect } = useContext(Web3Context);
  const live = false;
  const changeNetwork = async () => {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xA4B1" }],
    });
  };


  const mint = () =>{

  }

  return (
    <div className="min-h-screen w-full">
      <h1 className="text-center text-7xl">Mint</h1>
      <div className=" w-2/3 flex justify-center mx-auto my-10 ">
        <div className="w-full justify-center mx-auto text-center text-white">
          <div className="text-2xl py-2">
            WL mint(free): 15/06/2022 17:00 UTC.
          </div>
          <div className="text-2xl py-2">
            Public mint(20 $MAGIC): 17/06/2022 17:00 UTC.
          </div>
          <div className="text-2xl py-2">Reveal: 17/06/2022 17:00 UTC</div>
          <div className="w-2/3 mx-auto border my-8"></div>
          {live && (
            <>
              {!address && (
                <>
                  <div className="text-lg">Connect your wallet to web3.</div>
                  <button
                    className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                    onClick={connect}>
                    Connect
                  </button>
                </>
              )}

              {address && network == 42161 && (
                <button
                  className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                  onClick={mint}>
                  Mint
                </button>
              )}
              {address && network != 42161 && (
                <button
                  className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                  onClick={changeNetwork}>
                  Change network to Arbitrum
                </button>
              )}
            </>
          )}
          {!live && <div className="text-3xl">Mint is not live!</div>}
        </div>
      </div>
    </div>
  );
}
