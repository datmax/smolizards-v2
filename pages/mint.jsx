import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Web3Context } from "../context/web3Context";
import { ethers } from "ethers";
import nft from "../contracts/nft";
import Modal from "../components/Modal";
import toast, { Toaster } from "react-hot-toast";
export default function Mint() {
  const [open, setOpen] = useState(false);
  const { provider, address, network, connect } = useContext(Web3Context);
  const live = true;
  const [minting, setMinting] = useState(false);
  const changeNetwork = async () => {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xA4B1" }],
    });
  };

  const mint = () => {
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nft.address, nft.abi, signer);
    contract
      .mint()
      .then((res) => {
        setMinting(true);
        res
          .wait()
          .then((res) => {
            setMinting(false);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen w-full">
      <Toaster></Toaster>
      <Modal open={open} setOpen={setOpen}></Modal>
      <h1 className="text-center text-7xl">Mint</h1>
      <div className=" w-2/3 flex justify-center mx-auto my-10 ">
        <div className="w-full justify-center mx-auto text-center text-white">
          <div className="text-2xl py-2">
            WL mint(free): 15/06/2022 17:00 UTC.
          </div>
          <div className="text-2xl py-2">
            Public mint(20 $MAGIC): 18/06/2022 17:00 UTC.
          </div>
          <div className="text-2xl py-2">Reveal: 18/06/2022 17:00 UTC</div>
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
                <>
                  {minting && (
                    <button
                      className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                      onClick={mint}>
                      Mint
                    </button>
                  )}
                  {!minting && (
                    <button
                      className=" py-4 px-12 bg-purple-800 rounded-lg text-xl mt-10 hover:bg-white hover:text-purple-800"
                      onClick={mint}>
                      Mint
                    </button>
                  )}
                </>
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
          {!live && (
            <div className="text-3xl">
              Mint is not live! Check back in a few minutes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
